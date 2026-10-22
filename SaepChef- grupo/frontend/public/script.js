
const API_URL = "http://localhost:3000";

let usuarioLogado = null;
let receitas = [];

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

document.addEventListener("DOMContentLoaded", () => {
    atualizarInterfaceUsuario();
    carregarReceitas();

    document.getElementById("recipeImageUrl")?.addEventListener("input", previewImageInput);
    document.getElementById("recipeForm")?.addEventListener("submit", cadastrarReceita);
    document.getElementById("loginForm")?.addEventListener("submit", realizarLogin);
});

async function carregarReceitas() {
    try {
        const resposta = await fetch(`${API_URL}/receitas`);

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar as receitas.");
        }

        const dados = await resposta.json();

        receitas = Array.isArray(dados)
            ? dados
            : dados.receitas || dados.dados || dados.resultado || [];

        aplicarBusca();
        atualizarInterfaceUsuario();
    } catch (erro) {
        console.error("Erro ao carregar receitas:", erro);
        recipesGrid.innerHTML = "";
        emptyState.classList.remove("hidden");
        emptyState.querySelector("h3").textContent = "Não foi possível carregar as receitas";
        emptyState.querySelector("p").textContent =
            "Verifique se o backend está funcionando e tente novamente.";
    }
}

function renderizarReceitas(lista = receitas) {
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

        const rodape = document.createElement("div");
        rodape.className = "recipe-card-footer";

        const autor = document.createElement("span");
        autor.className = "chef-name";
        autor.textContent = receita.nome || receita.nome_usuario || "Chef da comunidade";

        const botoes = document.createElement("div");

        const ver = document.createElement("button");
        ver.type = "button";
        ver.className = "recipe-open-button";
        ver.textContent = "Ver receita";
        ver.addEventListener("click", () => abrirDetalhesReceita(receita.id_receita));

        const favorito = document.createElement("button");
        favorito.type = "button";
        favorito.className = "recipe-favorite-button";
        favorito.innerHTML = '<i class="fa-regular fa-heart"></i> Favoritar';
        favorito.addEventListener("click", () => favoritarReceita(receita.id_receita));

        botoes.append(ver, favorito);
        rodape.append(autor, botoes);
        corpo.append(meta, titulo, descricao, rodape);
        card.append(foto, corpo);
        recipesGrid.appendChild(card);
    });
}

function abrirDetalhesReceita(id) {
    const receita = receitas.find(item => String(item.id_receita) === String(id));
    if (!receita) return;

    const conteudo = document.getElementById("recipeDetailContent");
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

    conteudo.append(titulo, descricao);
    recipeDetailModal.classList.remove("hidden");
}

function fecharRecipeModal(event) {
    if (event && event.target !== recipeDetailModal) return;
    recipeDetailModal.classList.add("hidden");
}

function abrirLoginModal() {
    loginAlert.classList.add("hidden");
    loginAlert.textContent = "";
    loginModal.classList.remove("hidden");
}

function fecharLoginModal(event) {
    if (event && event.target !== loginModal) return;
    loginModal.classList.add("hidden");
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

    document.getElementById("headerUserName").textContent = nome;
    document.getElementById("drawerChefName").textContent = nome;
    document.getElementById("headerUserAvatar").textContent =
        usuarioLogado ? nome.charAt(0).toUpperCase() : "?";
    document.getElementById("drawerChefAvatar").textContent =
        usuarioLogado ? nome.charAt(0).toUpperCase() : "?";
    document.getElementById("drawerChefTag").textContent =
        usuarioLogado ? usuarioLogado.tipo || "Usuário" : "Acesse sua conta";

    const botaoLogin = document.getElementById("btnAuthHeader");

    if (usuarioLogado) {
        botaoLogin.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> Sair';
        botaoLogin.onclick = realizarLogout;
    } else {
        botaoLogin.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Login';
        botaoLogin.onclick = abrirLoginModal;
    }

    const isChef = usuarioLogado &&
        String(usuarioLogado.tipo).toLowerCase() === "chef";

    document.getElementById("recipeForm")?.classList.toggle("hidden", !isChef);
    document.getElementById("btnFiltrarChef")?.classList.toggle("hidden", !isChef);

    const minhas = receitasDoUsuario();
    document.getElementById("totalChefReceitas").textContent = minhas.length;
    document.getElementById("badgeSuasReceitasCount").textContent = minhas.length;

    renderizarListaDoChef();
}

function abrirMenuChef() {
    if (!usuarioLogado) {
        abrirLoginModal();
        return;
    }

    atualizarInterfaceUsuario();
    chefDrawer.classList.add("open");
    chefDrawerOverlay.classList.remove("hidden");
}

function fecharMenuChef() {
    chefDrawer.classList.remove("open");
    chefDrawerOverlay.classList.add("hidden");
}

function receitasDoUsuario() {
    if (!usuarioLogado) return [];

    return receitas.filter(receita =>
        String(receita.id_usuario) === String(usuarioLogado.id)
    );
}

function renderizarListaDoChef() {
    const lista = document.getElementById("chefRecipesList");
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
        botao.addEventListener("click", () => excluirReceita(receita.id_receita));

        item.append(titulo, botao);
        lista.appendChild(item);
    });
}

async function cadastrarReceita(event) {
    event.preventDefault();

    if (!usuarioLogado) {
        abrirLoginModal();
        return;
    }

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

    try {
        const respostaLista = await fetch(`${API_URL}/receitas`);

        if (!respostaLista.ok) {
            throw new Error("Não foi possível consultar os IDs das receitas.");
        }

        const dadosLista = await respostaLista.json();
        const lista = Array.isArray(dadosLista)
            ? dadosLista
            : dadosLista.receitas || dadosLista.dados || dadosLista.resultado || [];

        const ids = lista
            .map(item => Number(item.id_receita))
            .filter(id => Number.isInteger(id) && id > 0);

        receita.id_receita = ids.length > 0 ? Math.max(...ids) + 1 : 1;

        const resposta = await fetch(`${API_URL}/receitas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(receita)
        });

        const dados = await resposta.json().catch(() => ({}));

        if (!resposta.ok) {
            throw new Error(dados.erro || dados.mensagem || "Erro ao cadastrar receita.");
        }

        document.getElementById("recipeForm").reset();
        document.getElementById("imagePreviewContainer")?.classList.add("hidden");

        await carregarReceitas();
        alert("Receita cadastrada com sucesso!");
    } catch (erro) {
        console.error("Erro ao cadastrar receita:", erro);
        alert(erro.message);
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
            throw new Error(dados.erro || dados.mensagem || "Não foi possível favoritar a receita.");
        }

        alert(dados.mensagem || (dados.ativado ? "Receita favoritada!" : "Favorito removido."));
    } catch (erro) {
        console.error("Erro ao favoritar receita:", erro);
        alert(erro.message);
    }
}

function realizarLogout() {
    usuarioLogado = null;
    fecharMenuChef();
    atualizarInterfaceUsuario();
}

function tratarBuscaInput() {
    aplicarBusca();
}

function executarBusca() {
    aplicarBusca();
}

function aplicarBusca() {
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
    searchInput.value = "";
    searchFeedback.textContent = "";
    document.getElementById("muralTitle").textContent = "Receitas em destaque";
    aplicarBusca();
}

function filtrarMuralPorChefLogado() {
    if (!usuarioLogado) {
        abrirLoginModal();
        return;
    }

    fecharMenuChef();
    document.getElementById("muralTitle").textContent = "Minhas receitas";
    renderizarReceitas(receitasDoUsuario());
}

function previewImageInput() {
    const url = document.getElementById("recipeImageUrl").value.trim();
    const container = document.getElementById("imagePreviewContainer");
    const imagem = document.getElementById("imagePreview");

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
