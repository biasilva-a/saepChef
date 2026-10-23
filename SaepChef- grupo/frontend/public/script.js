
const API_URL = "http://localhost:3000";

let usuarioLogado = null;
let receitas = [];
let favoritosUsuario = [];
let cadastrandoReceita = false;

const recipesGrid = document.getElementById("recipesGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const searchFeedback = document.getElementById("searchFeedback");
const btnResetFilter = document.getElementById("btnResetFilter");
const loginModal = document.getElementById("loginModal");
const loginAlert = document.getElementById("loginAlert");
const recipeDetailModal = document.getElementById("recipeDetailModal");
const chefDrawer = document.getElementById("chefDrawer");
const chefDrawerOverlay = document.getElementById("chefDrawerOverlay");

document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("recipeImageUrl")?.addEventListener("input", previewImageInput);

    const formulario = document.getElementById("recipeForm");
    if (formulario) formulario.onsubmit = cadastrarReceita;

    document.getElementById("loginForm")?.addEventListener("submit", realizarLogin);

    atualizarInterfaceUsuario();
    await carregarReceitas();
});

async function carregarReceitas() {
    try {
        const resposta = await fetch(`${API_URL}/receitas`);

        if (!resposta.ok) throw new Error("Não foi possível carregar as receitas.");

        const dados = await resposta.json();

        receitas = Array.isArray(dados)
            ? dados
            : dados.receitas || dados.dados || dados.resultado || [];

        await carregarFavoritosUsuario();
        await carregarContagemFavoritosReceitas();

        aplicarBusca();
        atualizarInterfaceUsuario();
        await atualizarTotalFavoritosChef();
    } catch (erro) {
        console.error("Erro ao carregar receitas:", erro);

        if (recipesGrid) recipesGrid.innerHTML = "";

        if (emptyState) {
            emptyState.classList.remove("hidden");
            emptyState.querySelector("h3").textContent = "Não foi possível carregar as receitas";
            emptyState.querySelector("p").textContent =
                "Verifique se o backend está funcionando e tente novamente.";
        }
    }
}

async function carregarFavoritosUsuario() {
    if (!usuarioLogado?.id) {
        favoritosUsuario = [];
        return;
    }

    try {
        const resposta = await fetch(`${API_URL}/favoritos/usuario/${usuarioLogado.id}`);

        if (!resposta.ok) throw new Error("Erro ao carregar favoritos.");

        const dados = await resposta.json();

        favoritosUsuario = Array.isArray(dados)
            ? dados
            : dados.favoritos || dados.dados || [];
    } catch (erro) {
        console.error("Erro ao carregar favoritos:", erro);
        favoritosUsuario = [];
    }
}

async function carregarContagemFavoritosReceitas() {
    const resultados = await Promise.all(
        receitas.map(async receita => {
            try {
                const resposta = await fetch(
                    `${API_URL}/favoritos/receita/${receita.id_receita}/total`
                );

                if (!resposta.ok) return [receita.id_receita, 0];

                const dados = await resposta.json();

                return [
                    receita.id_receita,
                    Number(dados.total ?? dados.totalFavoritos ?? dados.quantidade ?? 0)
                ];
            } catch (erro) {
                console.error("Erro ao contar favoritos:", erro);
                return [receita.id_receita, 0];
            }
        })
    );

    const contagens = new Map(resultados);

    receitas = receitas.map(receita => ({
        ...receita,
        total_favoritos: contagens.get(receita.id_receita) || 0
    }));
}

async function atualizarTotalFavoritosChef() {
    const contador = document.getElementById("totalChefFavoritos");

    if (!contador) return;

    if (!usuarioLogado?.id ||
        String(usuarioLogado.tipo).toLowerCase() !== "chef") {
        contador.textContent = "0";
        return;
    }

    try {
        const resposta = await fetch(
            `${ API_URL } /favoritos/chef / ${ usuarioLogado.id } `
        );

        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.mensagem || "Erro ao buscar favoritos.");
        }

        contador.textContent = Number(
            dados.totalFavoritos ?? dados.total ?? dados.quantidade ?? 0
        );
    } catch (erro) {
        console.error("Erro ao atualizar contador:", erro);
        contador.textContent = "0";
    }
}
function definirFotoUsuario(elementoId, nome) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;

    const foto = usuarioLogado?.imagem_usuario;

    if (foto) {
        let imagem = elemento.tagName === "IMG"
            ? elemento
            : elemento.querySelector("img");

        if (!imagem) {
            imagem = document.createElement("img");
            imagem.className = "user-profile-photo";
            imagem.alt = `Foto de ${nome}`;
            elemento.replaceChildren(imagem);
        }

        imagem.src = foto;
        imagem.alt = `Foto de ${nome}`;
        imagem.onerror = () => {
            imagem.removeAttribute("src");
            elemento.textContent = nome.charAt(0).toUpperCase() || "?";
        };
    } else {
        if (elemento.tagName === "IMG") {
            elemento.alt = `Foto de ${nome}`;
            elemento.src = "";
            elemento.style.display = "none";
            return;
        }

        elemento.querySelector("img")?.remove();
        elemento.textContent = usuarioLogado
            ? nome.charAt(0).toUpperCase()
            : "?";
    }
}

function renderizarReceitas(lista = receitas) {
    if (!recipesGrid || !emptyState) return;

    recipesGrid.innerHTML = "";
    emptyState.classList.toggle("hidden", lista.length > 0);

    lista.forEach(receita => {
        const card = document.createElement("article");
        card.className = "recipe-card";

        const foto = document.createElement("div");

        if (receita.url_imagem) {
            const img = document.createElement("img");
            img.className = "recipe-image";
            img.src = receita.url_imagem;
            img.alt = receita.titulo_receita || "Receita";

            img.onerror = () => {
                foto.className = "recipe-image-placeholder";
                foto.innerHTML = '<i class="fa-solid fa-bowl-food"></i>';
            };

            foto.appendChild(img);
        } else {
            foto.className = "recipe-image-placeholder";
            foto.innerHTML = '<i class="fa-solid fa-bowl-food"></i>';
        }

        const corpo = document.createElement("div");
        corpo.className = "recipe-card-body";

        const meta = document.createElement("div");
        meta.className = "recipe-meta";
        meta.innerHTML = '<span class="recipe-category">Receita</span><span>SAEPChef</span>';

        const titulo = document.createElement("h3");
        titulo.textContent = receita.titulo_receita || "Receita sem título";

        const descricao = document.createElement("p");
        descricao.textContent = receita.origem_receita || "Sem descrição.";

        const contador = document.createElement("p");
        contador.className = "recipe-favorite-count";
        contador.innerHTML = '<i class="fa-solid fa-heart"></i> ';
        contador.append(
            document.createTextNode(`${Number(receita.total_favoritos) || 0} favorito(s)`)
        );

        const rodape = document.createElement("div");
        rodape.className = "recipe-card-footer";

        const autor = document.createElement("span");
        autor.className = "chef-name";
        autor.textContent =
            receita.nome || receita.nome_usuario || "Chef da comunidade";

        const botoes = document.createElement("div");

        const ver = document.createElement("button");
        ver.type = "button";
        ver.className = "recipe-open-button";
        ver.textContent = "Ver receita";
        ver.addEventListener("click", () =>
            abrirDetalhesReceita(receita.id_receita)
        );

        const favorito = document.createElement("button");
        favorito.type = "button";
        favorito.className = "recipe-favorite-button";

        const estaFavoritada = favoritosUsuario.some(
            item => Number(item.id_receita) === Number(receita.id_receita)
        );

        favorito.innerHTML = `
            <img src="svg/estrela.svg" alt="" class="favorite-star">
            <span>${estaFavoritada ? "Favoritado" : "Favoritar"}</span>
        `;

        if (estaFavoritada) favorito.classList.add("favorited");

        favorito.addEventListener("click", () =>
            favoritarReceita(receita.id_receita)
        );

        botoes.append(ver, favorito);
        rodape.append(autor, botoes);
        corpo.append(meta, titulo, descricao, contador, rodape);
        card.append(foto, corpo);
        recipesGrid.appendChild(card);
    });
}

function abrirDetalhesReceita(id) {
    const receita = receitas.find(
        item => String(item.id_receita) === String(id)
    );

    if (!receita) return;

    const conteudo = document.getElementById("recipeDetailContent");
    if (!conteudo || !recipeDetailModal) return;

    conteudo.innerHTML = "";

    if (receita.url_imagem) {
        const imagem = document.createElement("img");
        imagem.src = receita.url_imagem;
        imagem.alt = receita.titulo_receita || "Receita";
        conteudo.appendChild(imagem);
    }

    const titulo = document.createElement("h2");
    titulo.textContent = receita.titulo_receita || "Receita";

    const descricao = document.createElement("p");
    descricao.textContent = receita.origem_receita || "Sem descrição.";

    const contador = document.createElement("p");
    contador.textContent = `Favoritos: ${Number(receita.total_favoritos) || 0}`;

    conteudo.append(titulo, descricao, contador);
    recipeDetailModal.classList.remove("hidden");
}

function fecharRecipeModal(event) {
    if (event && event.target !== recipeDetailModal) return;
    recipeDetailModal?.classList.add("hidden");
}

function abrirLoginModal() {
    if (!loginModal || !loginAlert) return;

    loginAlert.classList.add("hidden");
    loginAlert.textContent = "";
    loginModal.classList.remove("hidden");
}

function fecharLoginModal(event) {
    if (event && event.target !== loginModal) return;
    loginModal?.classList.add("hidden");
}

async function realizarLogin(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const senha = document.getElementById("loginSenha").value;

    try {
        const resposta = await fetch(`${API_URL}/usuarios/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.mensagem || dados.erro || "E-mail ou senha incorretos.");
        }

        usuarioLogado = dados.usuario || dados.dados || dados;

        if (!usuarioLogado?.id) {
            throw new Error("O servidor não retornou os dados do usuário.");
        }

        loginModal.classList.add("hidden");
        document.getElementById("loginForm").reset();

        await carregarReceitas();
        atualizarInterfaceUsuario();
    } catch (erro) {
        loginAlert.textContent = erro.message;
        loginAlert.classList.remove("hidden");
    }
}

function atualizarInterfaceUsuario() {
    const nome = usuarioLogado
        ? usuarioLogado.nome || usuarioLogado.nome_usuario || "Chef"
        : "Visitante";

    const headerName = document.getElementById("headerUserName");
    const drawerName = document.getElementById("drawerChefName");
    const drawerTag = document.getElementById("drawerChefTag");

    if (headerName) headerName.textContent = nome;
    if (drawerName) drawerName.textContent = nome;

    definirFotoUsuario("headerUserAvatar", nome);
    definirFotoUsuario("drawerChefAvatar", nome);

    if (drawerTag) {
        drawerTag.textContent = usuarioLogado
            ? usuarioLogado.tipo || "Usuário"
            : "Acesse sua conta";
    }

    const botaoLogin = document.getElementById("btnAuthHeader");

    if (botaoLogin) {
        if (usuarioLogado) {
            botaoLogin.innerHTML =
                '<i class="fa-solid fa-right-from-bracket"></i> Sair';
            botaoLogin.onclick = realizarLogout;
        } else {
            botaoLogin.innerHTML =
                '<i class="fa-solid fa-right-to-bracket"></i> Login';
            botaoLogin.onclick = abrirLoginModal;
        }
    }

    const isChef = usuarioLogado &&
        String(usuarioLogado.tipo).toLowerCase() === "chef";

    document.getElementById("recipeForm")?.classList.toggle("hidden", !isChef);
    document.getElementById("btnFiltrarChef")?.classList.toggle("hidden", !isChef);

    const minhas = receitasDoUsuario();

    const totalReceitas = document.getElementById("totalChefReceitas");
    const badgeReceitas = document.getElementById("badgeSuasReceitasCount");

    if (totalReceitas) totalReceitas.textContent = minhas.length;
    if (badgeReceitas) badgeReceitas.textContent = minhas.length;

    renderizarListaDoChef();
    atualizarTotalFavoritosChef();
}

function abrirMenuChef() {
    if (!usuarioLogado) {
        abrirLoginModal();
        return;
    }

    atualizarInterfaceUsuario();
    chefDrawer?.classList.add("open");
    chefDrawerOverlay?.classList.remove("hidden");
}

function fecharMenuChef() {
    chefDrawer?.classList.remove("open");
    chefDrawerOverlay?.classList.add("hidden");
}

function receitasDoUsuario() {
    if (!usuarioLogado) return [];

    return receitas.filter(
        receita => String(receita.id_usuario) === String(usuarioLogado.id)
    );
}

function renderizarListaDoChef() {
    const lista = document.getElementById("chefRecipesList");
    if (!lista) return;

    lista.innerHTML = "";

    if (!usuarioLogado) {
        lista.textContent = "Entre na sua conta para gerenciar suas receitas.";
        return;
    }

    const minhas = receitasDoUsuario();

    if (minhas.length === 0) {
        lista.textContent = "Você ainda não publicou receitas.";
        return;
    }

    minhas.forEach(receita => {
        const item = document.createElement("div");
        item.className = "chef-recipe-item";

        const titulo = document.createElement("strong");
        titulo.textContent = receita.titulo_receita;

        const botao = document.createElement("button");
        botao.type = "button";
        botao.textContent = "Excluir";
        botao.addEventListener("click", () =>
            excluirReceita(receita.id_receita)
        );

        item.append(titulo, botao);
        lista.appendChild(item);
    });
}

async function cadastrarReceita(event) {
    event.preventDefault();

    if (cadastrandoReceita) return;

    if (!usuarioLogado) {
        abrirLoginModal();
        return;
    }

    const formulario = document.getElementById("recipeForm");
    const botao = formulario.querySelector('[type="submit"]');

    const receita = {
        titulo_receita: document.getElementById("recipeTitle").value.trim(),
        origem_receita: document.getElementById("recipeOrigin").value.trim(),
        url_imagem: document.getElementById("recipeImageUrl").value.trim(),
        id_usuario: usuarioLogado.id
    };

    if (!receita.titulo_receita || !receita.origem_receita || !receita.url_imagem) {
        alert("Preencha todos os campos da receita.");
        return;
    }

    cadastrandoReceita = true;

    if (botao) {
        botao.disabled = true;
        botao.textContent = "Publicando...";
    }

    try {
        const resposta = await fetch(`${API_URL}/receitas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(receita)
        });

        const dados = await resposta.json().catch(() => ({}));

        if (!resposta.ok) {
            throw new Error(dados.erro || dados.mensagem || "Erro ao cadastrar receita.");
        }

        formulario.reset();
        document.getElementById("imagePreviewContainer")?.classList.add("hidden");

        await carregarReceitas();
        alert("Receita cadastrada com sucesso!");
    } catch (erro) {
        console.error("Erro ao cadastrar receita:", erro);
        alert(erro.message);
    } finally {
        cadastrandoReceita = false;

        if (botao) {
            botao.disabled = false;
            botao.textContent = "Publicar receita";
        }
    }
}

async function excluirReceita(id) {
    if (!confirm("Deseja excluir esta receita?")) return;

    try {
        const resposta = await fetch(`${API_URL}/receitas/${id}`, {
            method: "DELETE"
        });

        const dados = await resposta.json().catch(() => ({}));

        if (!resposta.ok) {
            throw new Error(dados.erro || dados.mensagem || "Não foi possível excluir a receita.");
        }

        await carregarReceitas();
        alert("Receita excluída com sucesso!");
    } catch (erro) {
        console.error("Erro ao excluir receita:", erro);
        alert(erro.message);
    }
}

async function favoritarReceita(idReceita) {
    if (!usuarioLogado) {
        abrirLoginModal();
        return;
    }

    try {
        const resposta = await fetch(`${API_URL}/favoritos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                idUsuario: usuarioLogado.id,
                idReceita
            })
        });

        const dados = await resposta.json().catch(() => ({}));

        if (!resposta.ok) {
            throw new Error(dados.erro || dados.mensagem || "Não foi possível atualizar o favorito.");
        }

        await carregarReceitas();

        if (!recipeDetailModal.classList.contains("hidden")) {
            abrirDetalhesReceita(idReceita);
        }
    } catch (erro) {
        console.error("Erro ao atualizar favorito:", erro);
        alert(erro.message);
    }
}

function realizarLogout() {
    usuarioLogado = null;
    favoritosUsuario = [];
    fecharMenuChef();
    atualizarInterfaceUsuario();
    aplicarBusca();
}

function tratarBuscaInput() {
    aplicarBusca();
}

function executarBusca() {
    aplicarBusca();
}

function aplicarBusca() {
    if (!searchInput || !btnResetFilter || !searchFeedback) {
        renderizarReceitas();
        return;
    }

    const busca = searchInput.value.trim().toLowerCase();

    btnResetFilter.classList.toggle("hidden", !busca);

    const filtradas = receitas.filter(receita => {
        const titulo = receita.titulo_receita || "";
        const descricao = receita.origem_receita || "";
        const chef = receita.nome || receita.nome_usuario || "";

        return `${titulo} ${descricao} ${chef}`.toLowerCase().includes(busca);
    });

    searchFeedback.textContent = busca
        ? `${filtradas.length} receita(s) encontrada(s).`
        : "";

    renderizarReceitas(filtradas);
}

function limparBuscaEResetar() {
    if (searchInput) searchInput.value = "";
    if (searchFeedback) searchFeedback.textContent = "";

    const titulo = document.getElementById("muralTitle");
    if (titulo) titulo.textContent = "Receitas em destaque";

    aplicarBusca();
}

function filtrarMuralPorChefLogado() {
    if (!usuarioLogado) {
        abrirLoginModal();
        return;
    }

    fecharMenuChef();

    const titulo = document.getElementById("muralTitle");
    if (titulo) titulo.textContent = "Minhas receitas";

    renderizarReceitas(receitasDoUsuario());
}

function previewImageInput() {
    const campo = document.getElementById("recipeImageUrl");
    const container = document.getElementById("imagePreviewContainer");
    const imagem = document.getElementById("imagePreview");

    if (!campo || !container || !imagem) return;

    const url = campo.value.trim();

    if (!url) {
        container.classList.add("hidden");
        imagem.removeAttribute("src");
        return;
    }

    imagem.src = url;
    container.classList.remove("hidden");
    imagem.onerror = () => container.classList.add("hidden");
    imagem.onload = () => container.classList.remove("hidden");
}
