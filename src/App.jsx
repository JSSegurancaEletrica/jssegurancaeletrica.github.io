import {
  Camera,
  Siren,
  Zap,
  Wifi,
  Cable,
  Wrench,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Home,
  Store,
  Tractor,
  CheckCircle2,
  ShieldCheck,
  ClipboardCheck,
  SearchCheck,
  Hammer,
} from "lucide-react";
import "./App.css";

const phoneNumber = "5582996720649";

const whatsappOrcamento =
  `https://wa.me/${phoneNumber}?text=` +
  encodeURIComponent(
    "Olá! Vim pelo site da JS Segurança Eletrônica e Elétrica e gostaria de solicitar um orçamento."
  );

const services = [
  {
    icon: Camera,
    title: "Câmeras de segurança",
    text: "Instalação e manutenção de CFTV com acesso remoto pelo celular.",
  },
  {
    icon: Siren,
    title: "Alarmes",
    text: "Alarmes, sensores e sirenes para residências, comércios e empresas.",
  },
  {
    icon: Zap,
    title: "Cerca elétrica",
    text: "Proteção perimetral para muros, fachadas e áreas externas.",
  },
  {
    icon: Wifi,
    title: "Redes e internet",
    text: "Roteadores, Wi-Fi, pontos de rede e melhoria da conectividade.",
  },
  {
    icon: Cable,
    title: "Cabeamento estruturado",
    text: "Organização de cabos, eletrodutos, caixas e infraestrutura técnica.",
  },
  {
    icon: Wrench,
    title: "Manutenção técnica",
    text: "Correção de falhas, troca de conectores, ajustes e suporte.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Contato",
    text: "Você chama no WhatsApp e informa o serviço desejado.",
  },
  {
    icon: SearchCheck,
    title: "Avaliação",
    text: "Análise da estrutura, pontos de instalação e materiais necessários.",
  },
  {
    icon: ClipboardCheck,
    title: "Orçamento",
    text: "Proposta clara antes da execução do serviço.",
  },
  {
    icon: Hammer,
    title: "Execução",
    text: "Instalação organizada, testada e com orientação de uso.",
  },
];

const segments = [
  {
    icon: Home,
    title: "Residências",
    text: "Segurança para sua casa e sua família.",
  },
  {
    icon: Store,
    title: "Comércios e empresas",
    text: "Proteção para lojas, farmácias, mercados e empresas.",
  },
  {
    icon: Tractor,
    title: "Propriedades rurais",
    text: "Monitoramento de entradas, galpões e áreas externas.",
  },
];

function App() {
  return (
    <main
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      >
      <header className="header">
        <div className="container headerContent">
          <a href="#inicio" className="brand">
          <img src="/logo-js.png" alt="JS Segurança Eletrônica e Elétrica" />
          <span>Segurança Eletrônica e Elétrica</span>
          </a>

          <nav>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como funciona</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="headerBtn" href={whatsappOrcamento} target="_blank" rel="noreferrer">
            Orçamento
          </a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="container heroContent">
          <div className="heroText">
            <div className="location">
              <MapPin size={16} />
              Penedo/AL e região
            </div>

            <h1>
              Instalação e manutenção em segurança eletrônica, elétrica e redes
            </h1>

            <p>
              Câmeras, alarmes, cerca elétrica, redes, cabeamento estruturado e
              serviços elétricos para residências, comércios, empresas e propriedades rurais.
            </p>

            <div className="heroChecks">
              <span><CheckCircle2 size={18} /> CFTV com acesso pelo celular</span>
              <span><CheckCircle2 size={18} /> Alarmes e proteção perimetral</span>
              <span><CheckCircle2 size={18} /> Redes e infraestrutura organizada</span>
              <span><CheckCircle2 size={18} /> Serviços elétricos com acabamento</span>
            </div>

            <div className="heroActions">
              <a className="primaryBtn" href={whatsappOrcamento} target="_blank" rel="noreferrer">
                <MessageCircle size={20} />
                Solicitar orçamento
              </a>

              <a className="outlineBtn" href="#servicos">
                Ver serviços
              </a>
            </div>
          </div>

          <div className="heroVisual">
            <img className="heroLogo" src="/logo-js.png" alt="JS Segurança Eletrônica e Elétrica" />
            <p>Segurança Eletrônica e Elétrica</p>

            <div className="visualGrid">
              <div>CFTV</div>
              <div>Alarmes</div>
              <div>Redes</div>
              <div>Elétrica</div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="section whiteSection">
        <div className="container">
          <div className="sectionTitle">
            <span>Nossos serviços</span>
            <h2>Soluções técnicas para proteger e organizar seu imóvel</h2>
            <p>
              Serviços executados com atenção à segurança, funcionamento e acabamento.
            </p>
          </div>

          <div className="servicesGrid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="card lightCard" key={service.title}>
                  <div className="iconBox">
                    <Icon size={28} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="processo" className="section blackSection">
        <div className="container">
          <div className="sectionTitle darkTitle">
            <span>Como funciona</span>
            <h2>Atendimento simples e direto</h2>
            <p>
              Do primeiro contato até a finalização, tudo é combinado de forma clara.
            </p>
          </div>

          <div className="stepsGrid">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="stepCard" key={step.title}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <Icon size={30} />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sobre" className="about">
        <div className="container aboutContent">
          <div>
            <span className="sectionLabel">Sobre a JS</span>
            <h2>Serviço técnico com responsabilidade e organização</h2>
            <p>
              A JS Segurança Eletrônica e Elétrica atua em Penedo/AL e região com
              instalação e manutenção de sistemas de segurança eletrônica, redes,
              infraestrutura e serviços elétricos.
            </p>
            <p>
              O objetivo é evitar improvisos e entregar uma instalação funcional,
              segura e com acabamento profissional.
            </p>
          </div>

          <div className="aboutBox">
            <ShieldCheck size={42} />
            <h3>Diferenciais</h3>
            <ul>
              <li>Instalação limpa e organizada</li>
              <li>Atendimento direto com Joelson</li>
              <li>Orientação sobre os equipamentos</li>
              <li>Suporte técnico pelo WhatsApp</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section whiteSection">
        <div className="container">
          <div className="sectionTitle">
            <span>Segmentos atendidos</span>
            <h2>Atendimento para diferentes ambientes</h2>
          </div>

          <div className="segmentsGrid">
            {segments.map((item) => {
              const Icon = item.icon;

              return (
                <article className="segmentCard lightCard" key={item.title}>
                  <Icon size={34} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="container contactBox">
          <span>Contato</span>
          <h2>Solicite seu orçamento</h2>
          <p>
            Envie uma mensagem informando o serviço desejado, cidade/bairro e,
            se possível, fotos ou vídeos do local.
          </p>

          <a className="primaryBtn" href={whatsappOrcamento} target="_blank" rel="noreferrer">
            <MessageCircle size={20} />
            Chamar no WhatsApp
          </a>

          <div className="contactInfo">
            <span><Phone size={18} /> (82) 9 9672-0649</span>
            <span><MapPin size={18} /> Penedo/AL e região</span>
            <span><Mail size={18} /> joelson.eletrotecnico@outlook.com</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footerContent">
          <small>© 2026 JS Segurança Eletrônica e Elétrica. Todos os direitos reservados.</small>
        </div>
      </footer>

      <a className="whatsappFloat" href={whatsappOrcamento} target="_blank" rel="noreferrer">
        <MessageCircle size={30} />
      </a>
    </main>
  );
}

export default App;