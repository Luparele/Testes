class Aluno {
    constructor(nome, matricula, curso) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = [];
        this.curso = curso;
    }

    adicionarNota(nota) {
        this.notas.push(nota);
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }

    exibirInformacoes() {
        console.log(`--- Informações do Aluno ---`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Curso: ${this.curso}`);
        console.log(`Notas: ${this.notas.join(', ')}`);
        console.log(`Média: ${this.calcularMedia().toFixed(2)}`);
    }
}

class Professor {
    constructor(nome, departamento) {
        this.nome = nome;
        this.departamento = departamento;
        this.disciplinas = [];
    }

    atribuirDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }

    listarTurmas() {
        console.log(`--- Turmas do Professor ${this.nome} ---`);
        if (this.disciplinas.length === 0) {
            console.log('Este professor não está atribuído a nenhuma disciplina.');
            return;
        }
        this.disciplinas.forEach(disciplina => {
            console.log(`- ${disciplina.nome} (Código: ${disciplina.codigo})`);
        });
    }

    exibirInformacoes() {
        console.log(`--- Informações do Professor ---`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Departamento: ${this.departamento}`);
        this.listarTurmas();
    }
}

class Disciplina {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
        this.alunosMatriculados = [];
    }

    matricularAluno(aluno) {
        this.alunosMatriculados.push(aluno);
        console.log(`Aluno ${aluno.nome} matriculado na disciplina ${this.nome}.`);
    }

    gerarBoletim() {
        console.log(`--- Boletim da Disciplina ${this.nome} ---`);
        if (this.alunosMatriculados.length === 0) {
            console.log('Nenhum aluno matriculado nesta disciplina.');
            return;
        }
        this.alunosMatriculados.forEach(aluno => {
            console.log(`Aluno: ${aluno.nome} (Matrícula: ${aluno.matricula}) - Média: ${aluno.calcularMedia().toFixed(2)}`);
        });
    }

    exibirInformacoes() {
        console.log(`--- Informações da Disciplina ---`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Código: ${this.codigo}`);
        console.log(`Alunos Matriculados:`);
        if (this.alunosMatriculados.length === 0) {
            console.log('Nenhum aluno matriculado.');
        } else {
            this.alunosMatriculados.forEach(aluno => console.log(`- ${aluno.nome}`));
        }
    }
}

class Escola {
    constructor(nome) {
        this.nome = nome;
        this.listaAlunos = [];
        this.listaProfessores = [];
        this.listaDisciplinas = [];
    }

    matricularAluno(aluno) {
        this.listaAlunos.push(aluno);
        console.log(`Aluno ${aluno.nome} matriculado na escola ${this.nome}.`);
    }

    contratarProfessor(professor) {
        this.listaProfessores.push(professor);
        console.log(`Professor ${professor.nome} contratado pela escola ${this.nome}.`);
    }

    adicionarDisciplina(disciplina) {
        this.listaDisciplinas.push(disciplina);
        console.log(`Disciplina ${disciplina.nome} adicionada à escola ${this.nome}.`);
    }

    buscarAlunoPorMatricula(matricula) {
        return this.listaAlunos.find(aluno => aluno.matricula === matricula);
    }

    buscarProfessorPorNome(nome) {
        return this.listaProfessores.find(professor => professor.nome === nome);
    }

    buscarDisciplinaPorCodigo(codigo) {
        return this.listaDisciplinas.find(disciplina => disciplina.codigo === codigo);
    }

    gerarRelatorio() {
        console.log(`\n--- Relatório Geral da Escola ${this.nome} ---`);
        console.log(`Total de Alunos: ${this.listaAlunos.length}`);
        console.log(`Total de Professores: ${this.listaProfessores.length}`);
        console.log(`Total de Disciplinas: ${this.listaDisciplinas.length}`);

        console.log("\n--- Lista de Alunos ---");
        this.listaAlunos.forEach(aluno => console.log(`- ${aluno.nome} (Matrícula: ${aluno.matricula}, Curso: ${aluno.curso})`));

        console.log("\n--- Lista de Professores ---");
        this.listaProfessores.forEach(professor => console.log(`- ${professor.nome} (Departamento: ${professor.departamento})`));

        console.log("\n--- Lista de Disciplinas ---");
        this.listaDisciplinas.forEach(disciplina => console.log(`- ${disciplina.nome} (Código: ${disciplina.codigo})`));
    }
}

// Criando instâncias
const escolaInfo = new Escola("Escola Saber Mais");

const aluno1 = new Aluno("Ana Silva", "2023001", "Engenharia de Software");
const aluno2 = new Aluno("Pedro Santos", "2023002", "Medicina");
const aluno3 = new Aluno("Carla Oliveira", "2023003", "Direito");

const professor1 = new Professor("Dr. João Mendes", "Computação");
const professor2 = new Professor("Dra. Maria Souza", "Biologia");

const disciplina1 = new Disciplina("Programação I", "PROG101");
const disciplina2 = new Disciplina("Biologia Celular", "BIOC201");

// Adicionando instâncias à escola
escolaInfo.matricularAluno(aluno1);
escolaInfo.matricularAluno(aluno2);
escolaInfo.matricularAluno(aluno3);

escolaInfo.contratarProfessor(professor1);
escolaInfo.contratarProfessor(professor2);

escolaInfo.adicionarDisciplina(disciplina1);
escolaInfo.adicionarDisciplina(disciplina2);

// Interações entre as classes
professor1.atribuirDisciplina(disciplina1);
professor2.atribuirDisciplina(disciplina2);

disciplina1.matricularAluno(aluno1);
disciplina1.matricularAluno(aluno2);
disciplina2.matricularAluno(aluno3);

aluno1.adicionarNota(8.5);
aluno1.adicionarNota(9.0);
aluno2.adicionarNota(7.0);
aluno2.adicionarNota(7.5);
aluno3.adicionarNota(9.5);
aluno3.adicionarNota(10.0);

// Menu básico no console
function exibirMenu() {
    console.log("\n--- Menu Principal ---");
    console.log("1. Exibir informações do Aluno");
    console.log("2. Exibir informações do Professor");
    console.log("3. Exibir informações da Disciplina");
    console.log("4. Gerar boletim da Disciplina");
    console.log("5. Gerar relatório da Escola");
    console.log("6. Sair");
}

function executarAcao(opcao) {
    switch (opcao) {
        case '1':
            const matriculaAluno = prompt("Digite a matrícula do aluno:");
            const alunoEncontrado = escolaInfo.buscarAlunoPorMatricula(matriculaAluno);
            if (alunoEncontrado) {
                alunoEncontrado.exibirInformacoes();
            } else {
                console.log("Aluno não encontrado.");
            }
            break;
        case '2':
            const nomeProfessor = prompt("Digite o nome do professor:");
            const professorEncontrado = escolaInfo.buscarProfessorPorNome(nomeProfessor);
            if (professorEncontrado) {
                professorEncontrado.exibirInformacoes();
            } else {
                console.log("Professor não encontrado.");
            }
            break;
        case '3':
            const codigoDisciplina = prompt("Digite o código da disciplina:");
            const disciplinaEncontrada = escolaInfo.buscarDisciplinaPorCodigo(codigoDisciplina);
            if (disciplinaEncontrada) {
                disciplinaEncontrada.exibirInformacoes();
            } else {
                console.log("Disciplina não encontrada.");
            }
            break;
        case '4':
            const codigoBoletim = prompt("Digite o código da disciplina para gerar o boletim:");
            const disciplinaBoletim = escolaInfo.buscarDisciplinaPorCodigo(codigoBoletim);
            if (disciplinaBoletim) {
                disciplinaBoletim.gerarBoletim();
            } else {
                console.log("Disciplina não encontrada.");
            }
            break;
        case '5':
            escolaInfo.gerarRelatorio();
            break;
        case '6':
            console.log("Saindo do sistema.");
            return true;
        default:
            console.log("Opção inválida.");
    }
    return false;
}

// Iniciar o menu
let sair = false;
while (!sair) {
    exibirMenu();
    const opcaoSelecionada = prompt("Escolha uma opção:");
    sair = executarAcao(opcaoSelecionada);
}