 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        saepGreen: '#1B3C29',
                        saepGreenHover: '#132c1e',
                        saepYellow: '#F6A823',
                        saepYellowHover: '#df9417',
                    },
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                    }
                }
            }
        }

const usuariosDB = [
            { id: 1, nome: "Chef Helena Rizzo", email: "helena@saep.com", senha: "123", tag: "chef1", tipo: "chef", foto: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80" },
            { id: 2, nome: "Chef Alex Atala", email: "alex@saep.com", senha: "123", tag: "chef2", tipo: "chef", foto: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80" },
            { id: 3, nome: "Chef Erick Jacquin", email: "erick@saep.com", senha: "123", tag: "chef3", tipo: "chef", foto: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=200&q=80" },
            { id: 4, nome: "Chef Claude Troisgros", email: "claude@saep.com", senha: "123", tag: "chef4", tipo: "chef", foto: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=200&q=80" },
            { id: 5, nome: "Chef Paola Carosella", email: "paola@saep.com", senha: "123", tag: "chef5", tipo: "chef", foto: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=200&q=80" },
            { id: 10, nome: "Maria Silva", email: "maria@saep.com", senha: "123", tag: "maria", tipo: "comum", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" }
        ];

        let receitasDB = [
            {
                id: 1,
                titulo: "Creme de Cogumelos com Ervilhas",
                origem: "Prato Principal",
                prepTime: "30 min",
                chef_id: 1,
                rating: 4.8,
                descricao: "Uma sopa aveludada e reconfortante com cogumelos fatiados e ervilhas frescas.",
                ingredientes: ["500g de cogumelos frescos", "1 xícara de ervilhas frescas", "1 litro de caldo de legumes", "100ml de creme de leite fresco", "Azeite, sal e pimenta-do-reino"],
                instrucoes: ["Refogue o alho no azeite até dourar.", "Adicione os cogumelos e cozinhe.", "Adicione o caldo e ferva.", "Finalize com o creme e ervilhas."],
                svg: `<svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#1b4d3e"/><circle cx="250" cy="250" r="170" fill="#ffffff"/><circle cx="250" cy="250" r="145" fill="#f4f1ea"/><circle cx="250" cy="250" r="120" fill="#eee5ce"/><circle cx="200" cy="180" rx="28" ry="18" fill="#8c6248"/><circle cx="280" cy="170" rx="28" ry="18" fill="#8c6248"/><circle cx="230" cy="230" rx="28" ry="18" fill="#8c6248"/><circle cx="305" cy="245" rx="28" ry="18" fill="#8c6248"/><circle cx="190" cy="265" rx="28" ry="18" fill="#8c6248"/><circle cx="260" cy="295" rx="28" ry="18" fill="#8c6248"/><circle cx="228" cy="160" r="7" fill="#328348"/><circle cx="278" cy="210" r="7" fill="#328348"/><circle cx="320" cy="205" r="7" fill="#328348"/><circle cx="195" cy="230" r="7" fill="#328348"/><circle cx="242" cy="270" r="7" fill="#328348"/><circle cx="292" cy="285" r="7" fill="#328348"/></svg>`
            },
            {
                id: 2,
                titulo: "Combo de Sushis Variados",
                origem: "Japonesa",
                prepTime: "45 min",
                chef_id: 2,
                rating: 4.9,
                descricao: "Rolls de sushi artesanais organizados harmoniosamente com centro de molho shoyu e wasabi.",
                ingredientes: ["2 xícaras de arroz para sushi", "Nori (folhas de alga)", "150g de salmão fresco", "1/2 pepino japonês", "Molho shoyu e gergelim"],
                instrucoes: ["Prepare o arroz e tempere.", "Enrole os rolls com o nori e recheios.", "Corte em fatias iguais.", "Disponha em círculo."],
                svg: `<svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#f5aa1c"/><circle cx="250" cy="250" r="170" fill="#ffffff"/><circle cx="250" cy="250" r="145" fill="#f0f0f0"/><g transform="translate(250,250)"><circle cx="0" cy="-80" r="26" fill="#1b4d3e"/><circle cx="0" cy="-80" r="20" fill="#f4f1ea"/><circle cx="0" cy="-80" r="10" fill="#e75837"/><circle cx="70" cy="-40" r="26" fill="#1b4d3e"/><circle cx="70" cy="-40" r="20" fill="#f4f1ea"/><circle cx="70" cy="-40" r="10" fill="#c02626"/><circle cx="70" cy="40" r="26" fill="#1b4d3e"/><circle cx="70" cy="40" r="20" fill="#f4f1ea"/><circle cx="70" cy="40" r="10" fill="#589a42"/><circle cx="0" cy="80" r="26" fill="#1b4d3e"/><circle cx="0" cy="80" r="20" fill="#f4f1ea"/><circle cx="0" cy="80" r="10" fill="#e75837"/><circle cx="-70" cy="40" r="26" fill="#1b4d3e"/><circle cx="-70" cy="40" r="20" fill="#f4f1ea"/><circle cx="-70" cy="40" r="10" fill="#e29e30"/><circle cx="-70" cy="-40" r="26" fill="#1b4d3e"/><circle cx="-70" cy="-40" r="20" fill="#f4f1ea"/><circle cx="-70" cy="-40" r="10" fill="#c02626"/><circle cx="0" cy="0" r="25" fill="#1b4d3e"/><circle cx="0" cy="0" r="19" fill="#e2ded4"/></g></svg>`
            },
            {
                id: 3,
                titulo: "Feijoada Completa Tradicional",
                origem: "Brasileira",
                prepTime: "120 min",
                chef_id: 3,
                rating: 5.0,
                descricao: "Feijoada rica e saborosa acompanhada de arroz branco, rodelas de laranja e couve fresca.",
                ingredientes: ["500g de feijão preto", "300g de carne seca e costelinha", "150g de paio e lingüiça", "Arroz branco cozido", "Laranjas fatiadas e couve"],
                instrucoes: ["Dessalgue as carnes.", "Cozinhe o feijão com as carnes até encorpar.", "Sirva com arroz, laranja e couve."],
                svg: `<svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#6d9b81"/><circle cx="250" cy="250" r="170" fill="#ffffff"/><circle cx="250" cy="250" r="145" fill="#f4f1ea"/><path d="M 170 170 A 100 100 0 0 0 250 350 A 100 100 0 0 0 290 190 Z" fill="#2d1e18"/><circle cx="210" cy="210" r="10" fill="#463127"/><circle cx="250" cy="240" r="11" fill="#463127"/><circle cx="195" cy="265" r="12" fill="#463127"/><circle cx="230" cy="290" r="10" fill="#463127"/><circle cx="210" cy="320" r="11" fill="#463127"/><circle cx="310" cy="210" r="70" fill="#ffffff"/><circle cx="310" cy="210" r="62" fill="#f7f5f0"/><circle cx="290" cy="290" r="30" fill="#f5aa1c"/><circle cx="290" cy="290" r="26" fill="#f8be43"/><circle cx="340" cy="320" r="30" fill="#f5aa1c"/><circle cx="340" cy="320" r="26" fill="#f8be43"/><ellipse cx="180" cy="330" rx="25" ry="10" fill="#2d603a"/><ellipse cx="230" cy="345" rx="28" ry="11" fill="#2d603a"/><ellipse cx="280" cy="360" rx="30" ry="11" fill="#2d603a"/></svg>`
            },
            {
                id: 4,
                titulo: "Omelete Espanhola com Vegetais",
                origem: "Entrada",
                prepTime: "25 min",
                chef_id: 4,
                rating: 4.6,
                descricao: "Omelete dourada recheada com pimentão vermelho, azeitonas pretas e ervilhas.",
                ingredientes: ["5 ovos caipiras", "1/2 pimentão vermelho", "1/3 xícara de azeitonas pretas", "Ervilhas frescas e azeite"],
                instrucoes: ["Bata os ovos levemente.", "Aqueça o azeite na frigideira e refogue vegetais.", "Despeje os ovos e doure."],
                svg: `<svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#cb6833"/><circle cx="250" cy="250" r="170" fill="#ffffff"/><circle cx="250" cy="250" r="145" fill="#f4f1ea"/><circle cx="250" cy="250" r="125" fill="#f0ca59"/><path d="M 160 185 A 35 35 0 0 1 225 200" stroke="#e05851" stroke-width="18" stroke-linecap="round" fill="none"/><path d="M 295 190 A 35 35 0 0 1 340 255" stroke="#e05851" stroke-width="18" stroke-linecap="round" fill="none"/><path d="M 200 290 A 35 35 0 0 1 265 315" stroke="#e05851" stroke-width="18" stroke-linecap="round" fill="none"/><rect x="225" y="165" width="40" height="15" rx="7" fill="#cc3328"/><rect x="160" y="232" width="40" height="15" rx="7" fill="#cc3328"/><rect x="265" y="258" width="45" height="15" rx="7" fill="#cc3328"/><ellipse cx="170" cy="285" rx="28" ry="17" fill="#2d2b38"/><ellipse cx="170" cy="285" rx="16" ry="9" fill="#f0ca59"/><ellipse cx="325" cy="305" rx="28" ry="17" fill="#2d2b38"/><ellipse cx="325" cy="305" rx="16" ry="9" fill="#f0ca59"/><circle cx="175" cy="220" r="9" fill="#328348"/><circle cx="225" cy="210" r="9" fill="#328348"/><circle cx="288" cy="195" r="9" fill="#328348"/><circle cx="335" cy="245" r="9" fill="#328348"/><circle cx="208" cy="288" r="9" fill="#328348"/><circle cx="295" cy="340" r="9" fill="#328348"/></svg>`
            },
            {
                id: 5,
                titulo: "Tacos Mexicanos de Canoa",
                origem: "Mexicana",
                prepTime: "35 min",
                chef_id: 5,
                rating: 4.7,
                descricao: "Canoas crocantes de milho recheadas com carne moída temperada, tomates e guacamole.",
                ingredientes: ["3 conchas/canoas de taco", "250g de carne moída", "Tomates picados e ervilhas", "Creme fresco e temperos"],
                instrucoes: ["Cozinhe e tempere a carne.", "Aqueça as conchas de taco.", "Monte com carne, tomate e creme."],
                svg: `<svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#1b4d3e"/><circle cx="250" cy="250" r="170" fill="#ffffff"/><circle cx="250" cy="250" r="145" fill="#f4f1ea"/><g transform="translate(0,-50)"><path d="M 190 160 A 60 60 0 0 0 310 160 Z" fill="#ebd07d"/><path d="M 195 152 A 55 20 0 0 1 305 152 Z" fill="#693c2b"/><circle cx="215" cy="140" r="8" fill="#2d603a"/><circle cx="250" cy="132" r="8" fill="#2d603a"/><circle cx="285" cy="140" r="8" fill="#2d603a"/><circle cx="230" cy="155" r="7" fill="#cc3328"/><circle cx="270" cy="155" r="7" fill="#cc3328"/><circle cx="230" cy="145" r="6" fill="#ffffff"/><circle cx="270" cy="145" r="6" fill="#ffffff"/></g><g transform="translate(-70,80)"><path d="M 190 160 A 60 60 0 0 0 310 160 Z" fill="#ebd07d"/><path d="M 195 152 A 55 20 0 0 1 305 152 Z" fill="#693c2b"/><circle cx="215" cy="140" r="8" fill="#2d603a"/><circle cx="250" cy="132" r="8" fill="#2d603a"/><circle cx="285" cy="140" r="8" fill="#2d603a"/><circle cx="230" cy="155" r="7" fill="#cc3328"/><circle cx="270" cy="155" r="7" fill="#cc3328"/><circle cx="230" cy="145" r="6" fill="#ffffff"/><circle cx="270" cy="145" r="6" fill="#ffffff"/></g><g transform="translate(67,80)"><path d="M 190 160 A 60 60 0 0 0 310 160 Z" fill="#ebd07d"/><path d="M 195 152 A 55 20 0 0 1 305 152 Z" fill="#693c2b"/><circle cx="215" cy="140" r="8" fill="#2d603a"/><circle cx="250" cy="132" r="8" fill="#2d603a"/><circle cx="285" cy="140" r="8" fill="#2d603a"/><circle cx="230" cy="155" r="7" fill="#cc3328"/><circle cx="270" cy="155" r="7" fill="#cc3328"/><circle cx="230" cy="145" r="6" fill="#ffffff"/><circle cx="270" cy="145" r="6" fill="#ffffff"/></g></svg>`
            },
            {
                id: 6,
                titulo: "Nhoque Colorido ao Molho de Tomate",
                origem: "Italiana",
                prepTime: "50 min",
                chef_id: 1,
                rating: 4.8,
                descricao: "Nhoques artesanais de batata, espinafre e beterraba servidos em molho de tomate rústico.",
                ingredientes: ["500g de batatas cozidas", "Extrato de beterraba e espinafre", "200g de farinha", "300ml de molho de tomate"],
                instrucoes: ["Prepare as três massas de nhoque.", "Molde e cozinhe em água fervente.", "Sirva coberto com molho de tomate."],
                svg: `<svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#f5aa1c"/><circle cx="250" cy="250" r="170" fill="#ffffff"/><circle cx="250" cy="250" r="145" fill="#f4f1ea"/><circle cx="250" cy="250" r="128" fill="#ba332b"/><circle cx="205" cy="170" r="28" fill="#603f7d"/><circle cx="250" cy="155" r="28" fill="#e05851"/><circle cx="295" cy="170" r="28" fill="#f3cb62"/><circle cx="170" cy="205" r="28" fill="#599b4d"/><circle cx="210" cy="230" r="28" fill="#e05851"/><circle cx="250" cy="210" r="28" fill="#f3cb62"/><circle cx="290" cy="230" r="28" fill="#599b4d"/><circle cx="335" cy="205" r="28" fill="#599b4d"/><circle cx="210" cy="280" r="28" fill="#603f7d"/><circle cx="250" cy="300" r="28" fill="#599b4d"/><circle cx="290" cy="280" r="28" fill="#f3cb62"/><circle cx="345" cy="250" r="28" fill="#603f7d"/><circle cx="205" cy="335" r="28" fill="#e05851"/><circle cx="250" cy="360" r="28" fill="#599b4d"/><circle cx="295" cy="335" r="28" fill="#f3cb62"/></svg>`
            },
            {
                id: 7,
                titulo: "Stroganoff de Frango com Arroz",
                origem: "Prato Principal",
                prepTime: "30 min",
                chef_id: 2,
                rating: 4.7,
                descricao: "Clássico stroganoff cremoso de frango com cogumelos e ervilhas acompanhado de arroz.",
                ingredientes: ["400g de peito de frango", "200g de creme de leite", "Molho de tomate e mostarda", "Arroz branco cozido"],
                instrucoes: ["Doure o frango no azeite.", "Adicione temperos, molho e cogumelos.", "Misture o creme de leite e sirva com arroz."],
                svg: `<svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#6d9b81"/><circle cx="250" cy="250" r="170" fill="#ffffff"/><circle cx="250" cy="250" r="145" fill="#f4f1ea"/><circle cx="270" cy="250" r="115" fill="#e2913f"/><circle cx="225" cy="225" r="16" fill="#8c6248"/><circle cx="285" cy="245" r="16" fill="#8c6248"/><circle cx="255" cy="295" r="16" fill="#8c6248"/><circle cx="270" cy="180" r="7" fill="#328348"/><circle cx="330" cy="270" r="7" fill="#328348"/><circle cx="240" cy="330" r="7" fill="#328348"/><circle cx="185" cy="235" r="75" fill="#ffffff"/><circle cx="185" cy="235" r="67" fill="#f7f5f0"/></svg>`
            },
            {
                id: 8,
                titulo: "Pizza Margherita Artesanal",
                origem: "Italiana",
                prepTime: "40 min",
                chef_id: 3,
                rating: 4.9,
                descricao: "Massa crocante com molho de tomate italiano, bolas de muçarela de búfala e manjericão.",
                ingredientes: ["1 disco de massa para pizza", "150ml de molho de tomate", "200g de muçarela de búfala", "Manjericão fresco"],
                instrucoes: ["Espalhe o molho na massa.", "Distribua a muçarela de búfala.", "Asse até dourar e finalize com manjericão."],
                svg: `<svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#693c2b"/><circle cx="250" cy="250" r="170" fill="#ffffff"/><circle cx="250" cy="250" r="145" fill="#f4f1ea"/><circle cx="250" cy="250" r="135" fill="#e3aa63"/><circle cx="250" cy="250" r="120" fill="#c43828"/><circle cx="250" cy="180" r="23" fill="#f4efe6"/><circle cx="292" cy="200" r="23" fill="#f4efe6"/><circle cx="320" cy="242" r="23" fill="#f4efe6"/><circle cx="310" cy="288" r="23" fill="#f4efe6"/><circle cx="250" cy="308" r="23" fill="#f4efe6"/><circle cx="200" cy="280" r="23" fill="#f4efe6"/><circle cx="210" cy="210" r="23" fill="#f4efe6"/><ellipse cx="180" cy="230" rx="15" ry="7" fill="#2d603a" transform="rotate(-15,180,230)"/><ellipse cx="240" cy="225" rx="15" ry="7" fill="#2d603a" transform="rotate(20,240,225)"/><ellipse cx="215" cy="250" rx="15" ry="7" fill="#2d603a" transform="rotate(-30,215,250)"/><ellipse cx="285" cy="235" rx="15" ry="7" fill="#2d603a" transform="rotate(40,285,235)"/><ellipse cx="295" cy="315" rx="15" ry="7" fill="#2d603a" transform="rotate(-20,295,315)"/></svg>`
            },
            {
                id: 9,
                titulo: "Espaguete ao Pesto com Tomates",
                origem: "Italiana",
                prepTime: "20 min",
                chef_id: 4,
                rating: 4.8,
                descricao: "Espaguete al dente envolvido em molho pesto caseiro, tomates cereja e nozes.",
                ingredientes: ["250g de espaguete", "1 xícara de molho pesto fresco", "Tomates cereja em rodelas", "Manjericão e nozes"],
                instrucoes: ["Cozinhe o espaguete até al dente.", "Misture com o molho pesto.", "Decore com tomates e manjericão."],
                svg: `<svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#1b4d3e"/><circle cx="250" cy="250" r="170" fill="#ffffff"/><circle cx="250" cy="250" r="145" fill="#f4f1ea"/><g fill="none" stroke="#e0be67" stroke-width="6" stroke-linecap="round"><ellipse cx="250" cy="180" rx="85" ry="12"/><ellipse cx="250" cy="200" rx="100" ry="15"/><ellipse cx="250" cy="225" rx="105" ry="18"/><ellipse cx="250" cy="250" rx="102" ry="16"/><ellipse cx="250" cy="275" rx="98" ry="15"/><ellipse cx="250" cy="300" rx="90" ry="14"/><ellipse cx="250" cy="325" rx="75" ry="12"/></g><path d="M 170 190 A 30 30 0 0 1 230 210" stroke="#e05851" stroke-width="16" stroke-linecap="round" fill="none"/><path d="M 298 260 A 30 30 0 0 1 330 320" stroke="#e05851" stroke-width="16" stroke-linecap="round" fill="none"/><path d="M 275 205 Q 310 215 320 225 Q 290 235 280 220 Z" fill="#467e41"/><circle cx="265" cy="190" r="8" fill="#bfa034"/><circle cx="248" cy="258" r="8" fill="#bfa034"/><circle cx="225" cy="310" r="8" fill="#bfa034"/><ellipse cx="210" cy="280" rx="15" ry="7" fill="#2d603a"/><ellipse cx="240" cy="330" rx="15" ry="7" fill="#2d603a"/></svg>`
            }
        ];

        let favoritosDB = [
            { id: 1, usuario_id: 10, receita_id: 1 },
            { id: 2, usuario_id: 10, receita_id: 3 },
            { id: 3, usuario_id: 1, receita_id: 2 }
        ];

        let usuarioLogado = null;
        let tempImagePreview = "";

        window.onload = function() {
            renderizarMuralReceitas();
            atualizarInterfaceUsuario();
        };

      function abrirLoginModal() {
            document.getElementById('loginModal').classList.remove('hidden');
            document.getElementById('loginAlert').classList.add('hidden');
        }

        function fecharLoginModal() {
            document.getElementById('loginModal').classList.add('hidden');
            document.getElementById('loginForm').reset();
        }

        function preencherCredenciais(email, senha) {
            document.getElementById('loginEmail').value = email;
            document.getElementById('loginSenha').value = senha;
        }

        function realizarLogin(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const senha = document.getElementById('loginSenha').value.trim();
            const alertBox = document.getElementById('loginAlert');

            const usuarioEncontrado = usuariosDB.find(u => u.email === email && u.senha === senha);

            if (usuarioEncontrado) {
                usuarioLogado = usuarioEncontrado;
                fecharLoginModal();
                atualizarInterfaceUsuario();
                renderizarMuralReceitas();
                mostrarNotificacaoToast(`Bem-vindo, ${usuarioLogado.nome}!`);
            } else {
                alertBox.textContent = "E-mail ou senha incorretos. Tente novamente.";
                alertBox.classList.remove('hidden');
            }
        }

        function realizarLogout() {
            usuarioLogado = null;
            fecharMenuChef();
            atualizarInterfaceUsuario();
            renderizarMuralReceitas();
            mostrarNotificacaoToast("Sessão encerrada com sucesso.");
        }

        function atualizarInterfaceUsuario() {
            const headerAvatar = document.getElementById('headerUserAvatar');
            const headerName = document.getElementById('headerUserName');
            const btnVerPerfil = document.getElementById('btnVerPerfil');
            const btnAuthHeader = document.getElementById('btnAuthHeader');

            if (usuarioLogado) {
                headerAvatar.src = usuarioLogado.foto;
                headerName.textContent = `@${usuarioLogado.tag}`;
                btnAuthHeader.innerHTML = `<i class="fa-solid fa-right-from-bracket mr-1.5"></i> Sair`;
                btnAuthHeader.onclick = realizarLogout;

                if (usuarioLogado.tipo === 'chef') {
                    btnVerPerfil.disabled = false;
                    btnVerPerfil.classList.remove('opacity-50', 'cursor-not-allowed');
                    btnVerPerfil.classList.add('cursor-pointer');
                } else {
                    btnVerPerfil.disabled = true;
                    btnVerPerfil.classList.add('opacity-50', 'cursor-not-allowed');
                    btnVerPerfil.classList.remove('cursor-pointer');
                }
            } else {
                headerAvatar.src = "https://placehold.co/100x100/1B3C29/FFFFFF?text=?";
                headerName.textContent = "Visitante";
                btnVerPerfil.disabled = true;
                btnVerPerfil.classList.add('opacity-50', 'cursor-not-allowed');
                btnVerPerfil.classList.remove('cursor-pointer');
                btnAuthHeader.innerHTML = `<i class="fa-solid fa-right-to-bracket mr-2"></i> Login`;
                btnAuthHeader.onclick = abrirLoginModal;
            }
        }

        function verificarCliqueAnonimo(e) {
            if (!usuarioLogado) {
                abrirLoginModal();
            }
        }

        
        function tratarBuscaInput(event) {
            if (event.key === 'Enter') {
                executarBusca();
            }
        }

        function executarBusca() {
            if (!usuarioLogado) {
                abrirLoginModal();
                return;
            }

            const inputVal = document.getElementById('searchInput').value.trim().toLowerCase();
            const feedback = document.getElementById('searchFeedback');
            const btnReset = document.getElementById('btnResetFilter');

            if (!inputVal) {
                limparBuscaEResetar();
                return;
            }

            const queryTag = inputVal.replace('@', '');
            const chefEncontrado = usuariosDB.find(u => u.tipo === 'chef' && (u.tag.toLowerCase() === queryTag || u.nome.toLowerCase().includes(queryTag)));

            if (chefEncontrado) {
                feedback.classList.remove('hidden', 'text-red-600');
                feedback.classList.add('text-saepGreen');
                feedback.textContent = `Exibindo receitas do chef @${chefEncontrado.tag}`;
                btnReset.classList.remove('hidden');
                
                renderizarMuralReceitas(chefEncontrado.id);
            } else {
                feedback.classList.remove('hidden', 'text-saepGreen');
                feedback.classList.add('text-red-600');
                feedback.textContent = "Chef não encontrado.";
                btnReset.classList.remove('hidden');
                
                renderizarMuralReceitas(-1);
            }
        }

        function limparBuscaEResetar() {
            document.getElementById('searchInput').value = '';
            document.getElementById('searchFeedback').classList.add('hidden');
            document.getElementById('btnResetFilter').classList.add('hidden');
            document.getElementById('muralTitle').innerHTML = `<i class="fa-solid fa-utensils text-saepYellow mr-2.5"></i> Mural de Receitas`;
            renderizarMuralReceitas();
        }

        function renderizarMuralReceitas(filtrarPorChefId = null) {
            const grid = document.getElementById('recipesGrid');
            const emptyState = document.getElementById('emptyState');
            grid.innerHTML = '';

            let lista = receitasDB;
            if (filtrarPorChefId !== null) {
                lista = receitasDB.filter(r => r.chef_id === filtrarPorChefId);
            }

            if (lista.length === 0) {
                emptyState.classList.remove('hidden');
                return;
            } else {
                emptyState.classList.add('hidden');
            }

            lista.forEach(receita => {
                const chef = usuariosDB.find(u => u.id === receita.chef_id);
                const totalFavoritos = favoritosDB.filter(f => f.receita_id === receita.id).length;
                const eFavoritado = usuarioLogado ? favoritosDB.some(f => f.receita_id === receita.id && f.usuario_id === usuarioLogado.id) : false;
                const corEstrela = eFavoritado ? '#F6A823' : '#1B3C29';

                const cardHtml = `
                    <div class="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                        
                        <!-- Tooltip Hover -->
                        <div class="group-hover:visible invisible opacity-0 absolute top-3 left-3 right-3 bg-slate-900/90 text-white p-2.5 rounded-lg text-xs z-20 backdrop-blur-xs shadow-lg transition-all duration-200 pointer-events-none">
                            <p class="font-semibold text-saepYellow"><i class="fa-solid fa-circle-info mr-1"></i> Detalhes:</p>
                            <p>Receita publicada por: <span class="font-medium text-slate-200">@${chef ? chef.tag : 'desconhecido'}</span></p>
                            <p>Origem: <span class="font-medium text-slate-200">${receita.origem}</span></p>
                        </div>

                        <!-- Imagem/SVG -->
                        <div class="relative h-52 overflow-hidden bg-slate-100 cursor-pointer" onclick="openRecipeModal(${receita.id})">
                            ${receita.svg ? receita.svg : `<img src="${receita.imagem || 'https://placehold.co/600x400/1B3C29/FFFFFF?text=Receita'}" alt="${receita.titulo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">`}
                            
                            <span class="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 font-semibold text-[11px] px-2.5 py-1 rounded-full shadow-sm">
                                <i class="fa-solid fa-earth-americas text-saepGreen mr-1"></i> ${receita.origem}
                            </span>
                        </div>

                        <!-- Conteúdo -->
                        <div class="p-5 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 onclick="openRecipeModal(${receita.id})" class="font-bold text-slate-800 text-lg leading-snug mb-2 group-hover:text-saepGreen transition-colors cursor-pointer">
                                    ${receita.titulo}
                                </h3>
                                <p class="text-xs text-slate-500 font-medium">
                                    Por <span class="text-saepGreen font-semibold">@${chef ? chef.tag : 'chef'}</span>
                                </p>
                            </div>

                            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                                <button onclick="openRecipeModal(${receita.id})" class="text-xs font-semibold text-saepGreen hover:underline">
                                    Ver Detalhes <i class="fa-solid fa-chevron-right text-[10px] ml-0.5"></i>
                                </button>
                                
                                <button onclick="alternarFavorito(${receita.id})" class="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 hover:border-saepYellow transition shadow-2xs">
                                    <svg class="w-5 h-5 transition-transform active:scale-125" viewBox="0 0 24 24" fill="${corEstrela}" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                    <span class="text-xs font-bold text-slate-700">${totalFavoritos}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                grid.innerHTML += cardHtml;
            });
        }

       
        function openRecipeModal(receitaId) {
            const receita = receitasDB.find(r => r.id === receitaId);
            if (!receita) return;

            const chef = usuariosDB.find(u => u.id === receita.chef_id);
            const content = document.getElementById('recipeDetailContent');

            content.innerHTML = `
                <div class="mb-4">
                    <span class="bg-emerald-100 text-saepGreen text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">${receita.origem}</span>
                    <h2 class="text-2xl font-bold text-slate-800 mt-2">${receita.titulo}</h2>
                    <p class="text-xs text-slate-500 font-medium mt-1">Por ${chef ? chef.nome : 'Chef'} (@${chef ? chef.tag : 'chef'}) • Tempo: ${receita.prepTime || '30 min'}</p>
                </div>

                <div class="h-64 rounded-xl overflow-hidden bg-slate-100 mb-6 border border-slate-200">
                    ${receita.svg ? receita.svg : `<img src="${receita.imagem}" class="w-full h-full object-cover">`}
                </div>

                <p class="text-sm text-slate-600 mb-6">${receita.descricao || 'Receita deliciosa preparada pelos melhores chefs.'}</p>

                <div class="space-y-4 border-t border-slate-100 pt-4">
                    <div>
                        <h4 class="font-bold text-xs text-slate-800 uppercase tracking-wider mb-2"><i class="fa-solid fa-list-check text-saepGreen mr-1.5"></i> Ingredientes</h4>
                        <ul class="list-disc list-inside text-xs text-slate-600 space-y-1">
                            ${(receita.ingredientes || ['Ingredientes selecionados conforme o preparo.']).map(i => `<li>${i}</li>`).join('')}
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold text-xs text-slate-800 uppercase tracking-wider mb-2"><i class="fa-solid fa-fire-burner text-saepYellow mr-1.5"></i> Modo de Preparo</h4>
                        <ol class="list-decimal list-inside text-xs text-slate-600 space-y-1">
                            ${(receita.instrucoes || ['Siga as etapas padrão do chef.']).map(p => `<li>${p}</li>`).join('')}
                        </ol>
                    </div>
                </div>
            `;

            document.getElementById('recipeDetailModal').classList.remove('hidden');
        }

        function fecharRecipeModal() {
            document.getElementById('recipeDetailModal').classList.add('hidden');
        }

       
        function alternarFavorito(receitaId) {
            if (!usuarioLogado) {
                abrirLoginModal();
                return;
            }

            const index = favoritosDB.findIndex(f => f.receita_id === receitaId && f.usuario_id === usuarioLogado.id);

            if (index >= 0) {
                favoritosDB.splice(index, 1);
            } else {
                const novoId = favoritosDB.length > 0 ? Math.max(...favoritosDB.map(f => f.id)) + 1 : 1;
                favoritosDB.push({
                    id: novoId,
                    usuario_id: usuarioLogado.id,
                    receita_id: receitaId
                });
            }

            renderizarMuralReceitas();
            if (usuarioLogado.tipo === 'chef') {
                atualizarMetricasChef();
            }
            gerarScriptSQL();
        }

       
        function abrirMenuChef() {
            if (!usuarioLogado || usuarioLogado.tipo !== 'chef') return;

            document.getElementById('drawerChefAvatar').src = usuarioLogado.foto;
            document.getElementById('drawerChefName').textContent = usuarioLogado.nome;
            document.getElementById('drawerChefTag').textContent = `@${usuarioLogado.tag}`;

            atualizarMetricasChef();
            renderizarListaSuasReceitas();

            document.getElementById('chefDrawerOverlay').classList.remove('hidden');
            document.getElementById('chefDrawer').classList.remove('translate-x-full');
        }

        function fecharMenuChef() {
            document.getElementById('chefDrawer').classList.add('translate-x-full');
            document.getElementById('chefDrawerOverlay').classList.add('hidden');
        }

        function atualizarMetricasChef() {
            if (!usuarioLogado) return;

            const receitasDoChef = receitasDB.filter(r => r.chef_id === usuarioLogado.id);
            const totalReceitas = receitasDoChef.length;
            const idsReceitasChef = receitasDoChef.map(r => r.id);
            const totalFavoritos = favoritosDB.filter(f => idsReceitasChef.includes(f.receita_id)).length;

            document.getElementById('totalChefReceitas').textContent = totalReceitas;
            document.getElementById('totalChefFavoritos').textContent = totalFavoritos;
        }

        function renderizarListaSuasReceitas() {
            const container = document.getElementById('chefRecipesList');
            const badgeCount = document.getElementById('badgeSuasReceitasCount');
            container.innerHTML = '';

            const suasReceitas = receitasDB.filter(r => r.chef_id === usuarioLogado.id);
            badgeCount.textContent = suasReceitas.length;

            if (suasReceitas.length === 0) {
                container.innerHTML = `<p class="text-xs text-slate-400 italic">Você ainda não possui receitas cadastradas.</p>`;
                return;
            }

            suasReceitas.forEach(r => {
                const itemHtml = `
                    <div class="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-lg shadow-2xs">
                        <div class="flex items-center space-x-3 overflow-hidden">
                            <div class="w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-slate-100">
                                ${r.svg ? r.svg : `<img src="${r.imagem}" class="w-full h-full object-cover">`}
                            </div>
                            <div class="truncate">
                                <span class="font-semibold text-xs text-slate-800 block truncate">${r.titulo}</span>
                                <span class="text-[10px] text-slate-500">${r.origem}</span>
                            </div>
                        </div>
                        <button onclick="excluirReceita(${r.id})" class="p-1.5 text-saepYellow hover:text-saepYellowHover hover:bg-amber-50 rounded transition ml-2" title="Excluir Receita">
                            <i class="fa-solid fa-trash-can text-base"></i>
                        </button>
                    </div>
                `;
                container.innerHTML += itemHtml;
            });
        }

        function previewImageInput() {
            const url = document.getElementById('recipeImageUrl').value.trim();
            const container = document.getElementById('imagePreviewContainer');
            const img = document.getElementById('imagePreview');

            if (url) {
                tempImagePreview = url;
                img.src = url;
                container.classList.remove('hidden');
            } else {
                container.classList.add('hidden');
            }
        }

        function cadastrarReceita(event) {
            event.preventDefault();
            if (!usuarioLogado || usuarioLogado.tipo !== 'chef') return;

            const titulo = document.getElementById('recipeTitle').value.trim();
            const origem = document.getElementById('recipeOrigin').value.trim();
            let imagem = tempImagePreview || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&q=80";

            const novoId = receitasDB.length > 0 ? Math.max(...receitasDB.map(r => r.id)) + 1 : 101;

            const novaReceita = {
                id: novoId,
                titulo: titulo,
                origem: origem,
                imagem: imagem,
                chef_id: usuarioLogado.id,
                prepTime: "30 min",
                descricao: "Receita recém-adicionada pelo chef.",
                ingredientes: ["Ingredientes frescos de alta qualidade."],
                instrucoes: ["Modo de preparo artesanal."]
            };

            receitasDB.push(novaReceita);

            document.getElementById('recipeForm').reset();
            document.getElementById('imagePreviewContainer').classList.add('hidden');
            tempImagePreview = "";

            renderizarListaSuasReceitas();
            atualizarMetricasChef();
            renderizarMuralReceitas();
            gerarScriptSQL();

            mostrarNotificacaoToast("Receita cadastrada com sucesso!");
        }

        function excluirReceita(receitaId) {
            receitasDB = receitasDB.filter(r => r.id !== receitaId);
            favoritosDB = favoritosDB.filter(f => f.receita_id !== receitaId);

            renderizarListaSuasReceitas();
            atualizarMetricasChef();
            renderizarMuralReceitas();
            gerarScriptSQL();

            mostrarNotificacaoToast("Receita excluída.");
        }

        function filtrarMuralPorChefLogado() {
            if (!usuarioLogado) return;
            fecharMenuChef();
            document.getElementById('muralTitle').innerHTML = `<i class="fa-solid fa-utensils text-saepYellow mr-2.5"></i> Receitas de @${usuarioLogado.tag}`;
            document.getElementById('btnResetFilter').classList.remove('hidden');
            renderizarMuralReceitas(usuarioLogado.id);
        }

        
        let sqlContentGlobal = "";

        function gerarScriptSQL() {
            let sql = `-- ==========================================================\n`;
            sql += `-- SAEPChef - SCRIPT DE CRIAÇÃO E POVOAMENTO DO BANCO DE DADOS\n`;
            sql += `-- Gerado Automaticamente para Avaliação SENAI\n`;
            sql += `-- Data: ${new Date().toLocaleDateString('pt-BR')}\n`;
            sql += `-- ==========================================================\n\n`;

            sql += `CREATE DATABASE IF NOT EXISTS \`saepchef_db\`;\nUSE \`saepchef_db\`;\n\n`;

            sql += `DROP TABLE IF EXISTS \`Favoritos\`;\n`;
            sql += `DROP TABLE IF EXISTS \`Receitas\`;\n`;
            sql += `DROP TABLE IF EXISTS \`Usuarios\`;\n\n`;

            sql += `CREATE TABLE \`Usuarios\` (\n`;
            sql += `  \`id\` INT AUTO_INCREMENT PRIMARY KEY,\n`;
            sql += `  \`nome\` VARCHAR(100) NOT NULL,\n`;
            sql += `  \`email\` VARCHAR(100) NOT NULL UNIQUE,\n`;
            sql += `  \`senha\` VARCHAR(255) NOT NULL,\n`;
            sql += `  \`foto\` TEXT,\n`;
            sql += `  \`tipo\` ENUM('chef', 'comum') NOT NULL DEFAULT 'comum'\n`;
            sql += `) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n`;

            sql += `CREATE TABLE \`Receitas\` (\n`;
            sql += `  \`id\` INT AUTO_INCREMENT PRIMARY KEY,\n`;
            sql += `  \`titulo\` VARCHAR(150) NOT NULL,\n`;
            sql += `  \`origem\` VARCHAR(100) NOT NULL,\n`;
            sql += `  \`imagem\` TEXT,\n`;
            sql += `  \`chef_id\` INT NOT NULL,\n`;
            sql += `  FOREIGN KEY (\`chef_id\`) REFERENCES \`Usuarios\`(\`id\`) ON DELETE CASCADE\n`;
            sql += `) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n`;

            sql += `CREATE TABLE \`Favoritos\` (\n`;
            sql += `  \`id\` INT AUTO_INCREMENT PRIMARY KEY,\n`;
            sql += `  \`usuario_id\` INT NOT NULL,\n`;
            sql += `  \`receita_id\` INT NOT NULL,\n`;
            sql += `  FOREIGN KEY (\`usuario_id\`) REFERENCES \`Usuarios\`(\`id\`) ON DELETE CASCADE,\n`;
            sql += `  FOREIGN KEY (\`receita_id\`) REFERENCES \`Receitas\`(\`id\`) ON DELETE CASCADE,\n`;
            sql += `  UNIQUE KEY \`uk_usuario_receita\` (\`usuario_id\`, \`receita_id\`)\n`;
            sql += `) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n`;

            sql += `-- INSERÇÃO DE DADOS DEFAULT / ATUAIS DA APLICAÇÃO\n\n`;

            sql += `INSERT INTO \`Usuarios\` (\`id\`, \`nome\`, \`email\`, \`senha\`, \`foto\`, \`tipo\`) VALUES\n`;
            const userValues = usuariosDB.map(u => `(${u.id}, '${u.nome.replace(/'/g, "''")}', '${u.email}', '${u.senha}', '${u.foto}', '${u.tipo}')`).join(',\n');
            sql += userValues + `;\n\n`;

            sql += `INSERT INTO \`Receitas\` (\`id\`, \`titulo\`, \`origem\`, \`imagem\`, \`chef_id\`) VALUES\n`;
            const recipeValues = receitasDB.map(r => `(${r.id}, '${r.titulo.replace(/'/g, "''")}', '${r.origem.replace(/'/g, "''")}', '${r.imagem || ''}', ${r.chef_id})`).join(',\n');
            sql += recipeValues + `;\n\n`;

            if (favoritosDB.length > 0) {
                sql += `INSERT INTO \`Favoritos\` (\`id\`, \`usuario_id\`, \`receita_id\`) VALUES\n`;
                const favValues = favoritosDB.map(f => `(${f.id}, ${f.usuario_id}, ${f.receita_id})`).join(',\n');
                sql += favValues + `;\n\n`;
            }

            sqlContentGlobal = sql;
            document.getElementById('sqlCodeContainer').textContent = sql;
        }

        function abrirSqlModal() {
            gerarScriptSQL();
            document.getElementById('sqlModal').classList.remove('hidden');
        }

        function fecharSqlModal() {
            document.getElementById('sqlModal').classList.add('hidden');
        }

        function copiarSqlScript() {
            const el = document.createElement('textarea');
            el.value = sqlContentGlobal;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            mostrarNotificacaoToast("Script SQL copiado para a área de transferência!");
        }

        function downloadSqlScript() {
            const blob = new Blob([sqlContentGlobal], { type: 'text/sql' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden', '');
            a.setAttribute('href', url);
            a.setAttribute('download', 'saepchef_database.sql');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

       
        function mostrarNotificacaoToast(mensagem) {
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-5 right-5 bg-saepGreen text-white px-4 py-3 rounded-xl shadow-2xl z-50 text-xs font-semibold flex items-center space-x-2 transition-all transform translate-y-full opacity-0';
            toast.innerHTML = `<i class="fa-solid fa-circle-check text-saepYellow text-base"></i> <span>${mensagem}</span>`;
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.classList.remove('translate-y-full', 'opacity-0');
            }, 100);

            setTimeout(() => {
                toast.classList.add('translate-y-full', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }