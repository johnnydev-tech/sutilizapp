# Resumo do Trabalho Final em React Native

Funcionalidades Principais:

    1.	Entrada de Texto: Os usuários podem digitar frases ou textos diretamente na interface.
    2.	Suavização de Frases: A aplicação utiliza uma API de IA para sugerir versões mais educadas de frases ofensivas, garantindo que não haja adição de texto ou explicação adicional.
    3.	Interface de Usuário: A aplicação conta com um layout simples, que inclui campos de texto para entrada de dados, um botão para solicitar a suavização e uma exibição para mostrar a frase suavizada.
    4.	Feedback ao Usuário: A aplicação fornece feedback em tempo real, indicando se a entrada é válida e exibindo a resposta suavizada logo após a requisição.

Tecnologias Utilizadas:
• React Native para o desenvolvimento da interface e lógica da aplicação.
• Expo para gestão de pacotes, suporte multiplataforma e fácil configuração.
• API de IA integrada para realizar a suavização das frases.

### Configuração do Projeto

Passos para gerar uma API Key no GROQ Cloud:

    1.	Acesse o Console do GROQ:
    -	Vá para https://console.groq.com/keys.

    2.	Criar uma Nova Chave de API:
    -	Clique em Create New Key ou equivalente para criar uma nova chave de API.
    -	Nomeie sua chave conforme desejar para identificá-la.
    -	Copie a chave gerada. Esta chave será usada para acessar o GROQ API em seu projeto.

Configurar o Ambiente 1. Criar um arquivo .env: - Na raiz do seu projeto Expo, crie um arquivo chamado .env. - Adicione a linha com a chave de API que você copiou:

```.env
EXPO_PUBLIC_GROQ_KEY=<chave_gerada>
```

    2.	Iniciar o projeto com o Expo:
    -	No terminal, na raiz do projeto, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

    -	Inicie o aplicativo com:

npx expo start

Ajuda Adicional - Você pode abrir o aplicativo em um emulador Android ou emulador iOS. - Também é possível testar o aplicativo diretamente no dispositivo com o Expo Go.

Recursos adicionais - Documentação do Expo: Para mais informações sobre como desenvolver com o Expo, consulte a documentação do Expo. - Tutorial do Expo: Para guiar você através da criação de seu primeiro aplicativo, siga o tutorial do Expo.
