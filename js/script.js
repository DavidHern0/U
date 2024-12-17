document.addEventListener('DOMContentLoaded', () => {
    const welcomePopup = document.getElementById('welcome-popup');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const poemElement = document.getElementById('poem');
    
    if (welcomePopup) {
        if (!localStorage.getItem('popupShown')) {
            welcomePopup.style.display = 'flex';
        }
        if (closePopupBtn) {
            closePopupBtn.addEventListener('click', () => {
                welcomePopup.style.display = 'none';
                localStorage.setItem('popupShown', 'true');
            });
        }
    }

    const poems = [
        `El amor es como un río
            que moja y salpica
            y desembucha en el mar.
            Navegamos a la deriva
            y nuestros sentimientos flotan
            entre la sal
            y las medusas marinas.
            El mar
            Oh el mar!
            Hogar del calamar`,

        `            Oh Lola, Lola,
            tu nombre me mola,
            pues es muy bonito
            para una española, Lola.

            Oh Lola, Lola,
            qué agusto se está aquí de merendola.
            Y que bien aliñas la escarola, Lola.

            Oh Lola, Lola,
            si se rompe un pie
            se lo escayola,
            y si está cariñosa
            me hace una gayola.`,

        `-Ven aqui putita que te voy a dar lo tuyo 

            -Que me has llamado Juan? 

            -Es que me preguntaba, cerda mia, si no te apeteceria que antes de ir a cenar te echase lo que es un buen polvo.. cacho guarra
        `,
        `-¿Me estás llamando fea?
        -No cariño, tú no eres fea, tú eres del montón, o sea, del montón bueno, porque hay un montón bueno y un montón malo. Bueno, pues tú eres del montón bueno. Luego está el montón que te cagas, pero esas están aparte y, además, qué estoy diciendo, si a mí lo que me gusta es una mujer inteligente.
        `,
        `-Ahora sí que sí. dos tabiques rectos, lisitos y pintados en el mismo tono que el salón. Decisión estética tan errónea como respetable.
        -Todo eso está muy bien, pero no nota que le falta algo.
        -Sí, cobrar, pero a los artistas no nos gusta hablar de dinero.
        -¿Me quiere decir dónde está la puerta?
        -Coño, si está Paco pintando dentro
        -¿Ves como faltaba algo?
        -El cliente dijo dos hábites y el cliente se lía, yo no tengo la culpa.
        -Bueno, bueno, bueno, bueno, bueno.
        -Bueno, Mauri, esto es una broma, ¿no?
        -¿Pero de qué planeta sois? A qué secta pertenecéis para hacer una habitación sin puerta?
        -No si a mí también me parece absurdo, pero queda bien en plan pirámide.
        -Mira, yo mejor me vuelvo a casa de Rosa.
        -No, no, no. Tú métete ahí dentro con el crío a jugar con el perro,  que a esto no le falta nada.
        -Si no tiene puerta,  
        -Y usted ya está abriendo un agujero para que salga el otro.
        -Pues sí, porque yo ya he terminado, ¿eh? Me estoy mareando con la pintura.
        -Bueno, ¿yo pico eh? Pero esto es otro presupuesto,  hasta que no me pague lo que me debes...
        -Ah, encima quiere que le pague. Esto es alucinante... Venga, vete a abrir.
        -¿Cómo voy a hacer una dieta en el tercero? Si solo he hecho una habitación.
        -Si no tienes puerta
        -Ya lo sé.
        -Ni la va a tener. Si te pones en plan moroso yo no muevo un dedo. Ahí te Dejo a tutanPaco. Abran Paso por favor.
        -Oiga, que hay un ser humano emparedado ahí dentro
        -Mariano.
        -Y también Han secuestrado a Paco
        -Presidente,  el gay está fuera de control.
        `
    ];

    function seleccionarPoemaAleatorio() {
        const indexAleatorio = Math.floor(Math.random() * poems.length);
        return poems[indexAleatorio];
    }

    if (poemElement) {
        poemElement.innerText = seleccionarPoemaAleatorio();
    }
});
