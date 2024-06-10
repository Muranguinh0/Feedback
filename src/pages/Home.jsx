import { CardContainer, IconContainer, ButtonContainer, ResultContainer } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"
import { useState } from "react";

  export function Home() {
    return (
          <CardContainer>
            <IconContainer>
              <img src={iconStarImg} alt="estrela" />
            </IconContainer>

            <h1>Como foi o atendimento?</h1>
            <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

            <ButtonContainer>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
            </ButtonContainer>

            <button>Enviar</button>
          </CardContainer>
      ) : (
          <CardContainer>
            <img src={thankYouImg} alt="Imagem do agradecimento" />
          </CardContainer>
      )
    )
  }