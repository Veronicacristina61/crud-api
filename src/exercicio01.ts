function cafe(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("café pronto");
        }, 5000);
    });
}

async function cafeexemplo() {
    const resultado = cafe();
    console.log(resultado); // Imprime a Promise pendente

    const resultadoaguardado = await cafe();
    console.log(resultadoaguardado); // Aguarda 2 segundos e imprime "café pronto"
}

cafeexemplo();



type Cep = {
    cep: string;
    logradouro: string;
    complemento: string;
      unidade: string;
      bairro: string;
      localidade: string;
      uf: string;
      estado: string;
      regiao: string;
      ibge: string;
      gia: string;
      ddd: string,
      siafi: string;
}


async function buscarcep(): Promise<Cep> { //Get da api
    const response = await fetch("https://viacep.com.br/ws/01001000/json/")
    const dados = await response.json() as Cep;
    return dados;

}async function buscarCepExemplo() {
    const resultadoAguardando = await buscarcep();
    console.log(resultadoAguardando); // Imprime a Promise pendente
  
}

buscarCepExemplo();function cafe(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("café pronto");
        }, 5000);
    });
}

async function cafeexemplo() {
    const resultado = cafe();
    console.log(resultado); // Imprime a Promise pendente

    const resultadoaguardado = await cafe();
    console.log(resultadoaguardado); // Aguarda 2 segundos e imprime "café pronto"
}

cafeexemplo();



// --- TIPOS ---
type Cep = {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
};

type Post = {
    userId?: number;
    id?: number;
    title: string;
    body: string;
};

const BASE_URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

async function buscarcep(): Promise<Cep> {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    const dados = await response.json() as Cep;
    return dados;
}



// 1. READ: Buscar o post de ID 1
async function buscarPost(): Promise<Post> {
    const response = await fetch(`${BASE_URL_POSTS}/1`);
    const dados = await response.json() as Post;
    return dados;
}

// 2. CREATE: Criar um novo post
async function criarPost(novoPost: Post): Promise<Post> {
    const response = await fetch(BASE_URL_POSTS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(novoPost),
    });
    const dados = await response.json() as Post;
    return dados;
}

// 3. UPDATE: Atualizar o post de ID 1
async function atualizarPost(id: number, novoTitulo: string): Promise<Post> {
    const response = await fetch(`${BASE_URL_POSTS}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ title: novoTitulo }),
    });
    const dados = await response.json() as Post;
    return dados;
}

// 4. DELETE: Apagar o post de ID 1
async function deletarPost(id: number): Promise<boolean> {
    const response = await fetch(`${BASE_URL_POSTS}/${id}`, {
        method: "DELETE",
    });
    return response.ok;
}

// --- EXECUÇÃO ---
async function executarTudo() {
    // Consulta do CEP original
    console.log("--- VIA CEP ---");
    const cepEncontrado = await buscarcep();
    console.log("Logradouro retornado:", cepEncontrado.logradouro);

    // 1. Read
    console.log("\n--- 1. READ ---");
    const postEncontrado = await buscarPost();
    console.log("Título do post 1:", postEncontrado.title);

    // 2. Create
    console.log("\n--- 2. CREATE ---");
    const novoPostData: Post = {
        title: "Novo Post TypeScript",
        body: "Corpo do post criado com sucesso",
        userId: 1,
    };
    const postCriado = await criarPost(novoPostData);
    console.log("Post devolvido pela API:", postCriado);

    // 3. Update
    console.log("\n--- 3. UPDATE ---");
    const postAtualizado = await atualizarPost(1, "Novo Título Atualizado");
    console.log("Resultado da atualização:", postAtualizado);

    // 4. Delete
    console.log("\n--- 4. DELETE ---");
    const apagadoComSucesso = await deletarPost(1);
    if (apagadoComSucesso) {
        console.log("Mensagem: O post de ID 1 foi apagado com sucesso!");
    }
}

executarTudo();