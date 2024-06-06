import React, { useEffect, useState, useMemo } from "react";
import "./App.css";

function App() {
  const [peopleList, setPeopleList] = useState([]);
  const peoples = useMemo(
    () => [
      {
        room: "101",
        name: "Fernanda Rita Barbosa",
        profession: "Advogado"
      },
      {
        room: "105",
        name: "Mário Henry Thiago Monteiro",
        profession: "Dentista"
      },
      {
        room: "115",
        name: "Ruan Bento Benjamin Nunes",
        profession: "Arquiteto"
      },
      {
        room: "200",
        name: "Rodrigo Nicolas André da Costa",
        profession: "Fonoautoólogo"
      },
      {
        room: "207",
        name: "Theo Marcelo da Rosa",
        profession: "Advogado"
      },
      {
        room: "260",
        name: "Antonella Sophia Corte Real",
        profession: "Dentista"
      },
      {
        room: "310",
        name: "Priscila Lívia da Mota",
        profession: "Advogado"
      },
      {
        room: "345",
        name: "Sônia Priscila Analu Galvão",
        profession: "Fonoautoólogo"
      },
      {
        room: "395",
        name: "Isabelly Mariah Drumond",
        profession: "Fotógrafo"
      },
      {
        room: "307",
        name: "Jorge Matheus Nogueira",
        profession: "Arquiteto"
      },
      {
        room: "410",
        name: "Benedita Bruna Cardoso",
        profession: "Arquiteto"
      },
      {
        room: "445",
        name: "Cauã Bernardo Brito",
        profession: "Fonoautoólogo"
      },
      {
        room: "475",
        name: "Roberto Tomás Bernardes",
        profession: "Dentista"
      },
      {
        room: "510",
        name: "Helena Manuela Larissa Oliveira",
        profession: "Médico"
      },
      {
        room: "516",
        name: "Ian Heitor Rezende",
        profession: "Fotógrafo"
      },
      {
        room: "521",
        name: "Isabella Laís Flávia Alves",
        profession: "Advogado"
      },
      {
        room: "534",
        name: "Yuri Anderson Bernardes",
        profession: "Nutricionista"
      },
      {
        room: "566",
        name: "Roberto Kauê Ramos",
        profession: "Fonoautoólogo"
      },
      {
        room: "570",
        name: "Vitor Enrico Fábio Barros",
        profession: "Dentista"
      },
      {
        room: "576",
        name: "Emanuelly Maria Sueli Assunção",
        profession: "Dentista"
      },
      {
        room: "600",
        name: "Giovanna Raimunda Assis",
        profession: "Médico"
      },
      {
        room: "604",
        name: "Alexandre Tiago Bento Jesus",
        profession: "Médico"
      },
      {
        room: "608",
        name: "Renato Marcos Peixoto",
        profession: "Fotógrafo"
      },
      {
        room: "610",
        name: "Rafael Manuel Felipe Rocha",
        profession: "Arquiteto"
      },
      {
        room: "625",
        name: "Olivia Camila da Mota",
        profession: "Advogado"
      },
      {
        room: "628",
        name: "Luan Francisco Costa",
        profession: "Dentista"
      },
      {
        room: "630",
        name: "Felipe Diego Pinto",
        profession: "Médico"
      },
      {
        room: "635",
        name: "Laís Liz Duarte",
        profession: "Fonoautoólogo"
      },
      {
        room: "641",
        name: "Benjamin Caio Julio Lima",
        profession: "Nutricionista"
      },
      {
        room: "643",
        name: "Rita Alessandra Raquel de Paula",
        profession: "Advogado"
      },
      {
        room: "650",
        name: "Paulo Ricardo Severino Melo",
        profession: "Médico"
      },
      {
        room: "658",
        name: "Anderson Edson Erick Aragão",
        profession: "Médico"
      },
      {
        room: "660",
        name: "Giovanna Liz Lopes",
        profession: "Fotógrafo"
      },
      {
        room: "662",
        name: "Eduarda Cláudia da Costa",
        profession: "Advogado"
      },
      {
        room: "668",
        name: "Márcia Sophie Sales",
        profession: "Advogado"
      },
      {
        room: "670",
        name: "Aparecida Marlene Teresinha Silveira",
        profession: "Nutricionista"
      },
      {
        room: "671",
        name: "Fernando Caio Davi Aparício",
        profession: "Arquiteto"
      },
      {
        room: "673",
        name: "Danilo Pietro Caio Rodrigues",
        profession: "Arquiteto"
      },
      {
        room: "675",
        name: "Gabriel Caio Castro",
        profession: "Arquiteto"
      },
      {
        room: "679",
        name: "Betina Renata Eduarda Rezende",
        profession: "Nutricionista"
      },
      {
        room: "680",
        name: "Roberto Cláudio Erick Nascimento",
        profession: "Dentista"
      },
      {
        room: "683",
        name: "Bryan Benjamin Fernandes",
        profession: "Fotógrafo"
      },
      {
        room: "687",
        name: "Luan Gael das Neves",
        profession: "Advogado"
      },
      {
        room: "690",
        name: "Julia Eloá Isabelly da Conceição",
        profession: "Advogado"
      },
      {
        room: "693",
        name: "Analu Bruna Sophia Carvalho",
        profession: "Arquiteto"
      },
      {
        room: "695",
        name: "Carlos Benedito Leandro Farias",
        profession: "Dentista"
      }
    ],
    []
  );

  useEffect(() => {
    const groupedPeoples = peoples.reduce((groups, person) => {
      const firstNumber = person.room.charAt(0);
      if (!groups[firstNumber]) {
        groups[firstNumber] = [];
      }
      groups[firstNumber].push(person);
      return groups;
    }, {});
    setPeopleList(groupedPeoples);
  }, [peoples]);

  return (
    <main>
      <div className="header">
        <h1>Curitiba Trade Center</h1>
      </div>
      <div className="marquee-container">
        <div className="marquee__inner">
          {Object.entries(peopleList)?.map(([group, peoples]) => {
            return (
              <div className="items__line" key={group}>
                {peoples.map((person) => (
                  <div key={person.name} className="items">
                    <div className="items__text">
                      {person.room} - {person.name}
                    </div>
                    <span>{person.profession}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
