async function carregarProdutos() {
    const res = await fetch("http://localhost:8080/produtos");
    const produtos = await res.json();

    console.log(produtos);
}