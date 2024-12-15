const Groq = require('groq-sdk');


const groq = new Groq({ apiKey:  process.env.EXPO_PUBLIC_GROQ_KEY});

export async function suavizarOfensa(ofensa: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "user",
                    "content": "Quero que você suavize a frase que eu enviar. Apenas reescreva a frase de forma mais educada e elegante, sem adicionar nenhum texto ou explicação adicional. Aqui está a frase:"
                },
                {
                    "role": "user",
                    "content": ofensa
                }
            ],
            "model": "llama-3.1-70b-versatile",
            "temperature": 0.7,
            "max_tokens": 100,
        });

        return chatCompletion.choices[0]?.message.content;
    } catch (error) {
        const respostasEducadas = [
            "Gostaria de sugerir uma abordagem mais construtiva para essa situação.",
            "Poderíamos considerar isso de outra perspectiva, talvez mais positiva?",
            "Entendo o ponto, mas acho que podemos abordar isso de maneira mais calma.",
            "Parece que há uma forma mais equilibrada de lidar com isso.",
            "Posso reformular isso de uma forma que soe mais cooperativa?",
        ];

        return respostasEducadas[Math.floor(Math.random() * respostasEducadas.length)];
    }
}