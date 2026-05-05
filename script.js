fetch("http://localhost:8080/produtos/destaques")
    .then(res => res.json())
    .then(produtos => {
        const container = document.getElementById("destaquesContainer");

        container.innerHTML = "";

        produtos.forEach(produto => {
            const precoAntigo = Number(produto.preco_original).toFixed(2);
            const precoNovo = Number(produto.preco_promocao).toFixed(2);

            const card = `
                <div onclick="location.href='produto.html?id=${produto.id}'"
                    class="relative flex flex-col items-center border-2 border-purple-600 rounded-xl p-6 cursor-pointer hover:bg-purple-700 hover:-translate-y-2 transition">

                    ${produto.promocao_percent ? `
                        <div class="absolute top-3 right-3 bg-red-500 px-3 py-1 rounded-full text-sm font-bold">
                            -${produto.promocao_percent}%
                        </div>
                    ` : ""}

                    <img src="${produto.imagem_url}" class="w-[150px] mb-3">

                    <h4 class="text-rox text-sm">Produto</h4>
                    <span class="font-bold">${produto.nome}</span>
                    <p class="text-gray-400 text-sm">${produto.descricao}</p>

                    <div>
                        ${produto.preco_promocao ? `
                            <span class="line-through text-gray-500">
                                R$ ${precoAntigo}
                            </span>
                            <span class="block text-green-400 text-xl">
                                R$ ${precoNovo}
                            </span>
                        ` : `
                            <span class="block text-green-400 text-xl">
                                R$ ${precoAntigo}
                            </span>
                        `}
                    </div>
                </div>
            `;

            container.innerHTML += card;
        });
    })
    .catch(err => console.error(err));