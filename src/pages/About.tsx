import Image from '../components/Image';
import BrunoImg from '../assets/images/Bruno-min.png';

const About = (): JSX.Element => {
  return (
    <>
      <section className="px-4 text-center lg:px-14 py-4 bg-[#f3efec] leading-loose font-primary">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-2 space-y-2 mt-2">
          <Image src={BrunoImg} bgColor="#686868" />

          <div className="bg-gradient-to-tr from-[#2A95BF] to-[#256877] text-justify p-4 rounded">
            <h2 className="text-center font-medium text-lg sm:text-2xl md:text-3xl text-white">
              BRUNO FARAN ASFORA DE MOURA
            </h2>
            <div className="text-[#f3efec] font-normal text-lg font-primary">
              <br />
              <p>
                Especialista em Direito do Trabalho, pós-graduado em Dir.
                Processual Civil e do Trabalho pela Escola Superior da
                Magistratura de Pernambuco (ESMAPE). Formado na Universidade
                Católica de Pernambuco (UNICAP), em 2018, e aprovado na Ordem
                dos Advogados do Brasil (OAB) ainda durante a graduação.
              </p>
              <br />
              <p>
                Durante a sua formação, atuou em renomadas bancas de advocacia
                de Pernambuco e adquiririu vasta experiência profissional, em
                especial, na área trabalhista. Assim, construiu uma grande rede
                de relacionamento com advogados do Estado.
              </p>
              <br />
              <p>
                Atualmente, é membro da Comissão de Direito do Trabalho da
                OAB/PE, e auxilia o crescimento da advocacia, inclusive dos
                jovens advogados.
              </p>
              <br />
              <p>
                A sua atuação é dedicada às ações trabalhistas de todo o Brasil,
                tendo atuado em inúmeros processos, dos mais simples aos mais
                complexos, com resultados relevantes que satisfazem as
                necessidades dos seus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
