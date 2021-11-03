import React, { useState, useEffect } from 'react';
import './Navbar.css'

export default function Navbar({ setAula }) {
    
    const [modoNoturno, setModoNoturno] = useState(true)

    const aulas = 
    [
    {
        "id": 1,
        "titulo": "Componentes Básicos",
        "conteudo": 'Os componentes do aplicativo são os blocos de construção essenciais de um aplicativo Android. Esses componentes são fracamente acoplados pelo arquivo de manifesto do  aplicativo Android Manifest.xml, que descreve cada componente do aplicativo e  como eles interagem.  "Temos quatro componentes básicos, entre eles temos as Activities que ditam a IU e lidam com a interação do usuário com a tela do smartphone, os Services que lidam com o processamento em segundo plano associado a um aplicativo, os Broadcast Receivers que lidam com a comunicação entre o  sistema operacional Android e os aplicativos e os Content Providers que lidam com problemas de gerenciamento de dados e banco de dados',
        "modulo_id": 1,
        "tipo": "video",
        "video": "n3n-XMNBOf4",
    },
    {
        "id": 2,
        "titulo": "Activities",
        "conteudo": 'Um aplicativo Android é um aplicativo Android. Um aplicativo é empacotado em um arquivo APK (pacote de aplicativo Android). O arquivo APK contém o código Java compilado e outros recursos como textos e imagens para o aplicativo Android.',
        "modulo_id": 1,
        "tipo": "material",
        "video": "",
    },
    {
        "id": 3,
        "titulo": "Services",
        "conteudo": 'Os serviços Android são processos em segundo plano que podem ser executados em um dispositivo Android, mesmo que nenhum aplicativo esteja visível.  Os serviços não precisam de uma interface de usuário. Um serviço pode, por exemplo, verificar se há atualizações em um servidor remoto ou fazer backup de dados a cada hora etc.  Por exemplo, um serviço pode reproduzir música em segundo plano enquanto o usuário está em um aplicativo diferente ou pode buscar dados na rede sem bloquear o usuário interação  com uma atividade',
        "modulo_id": 1,
        "tipo": "video",
        "video": "yAKn54OsiIQ",
    },
    {
        "id": 4,
        "titulo": "Broadcast Receivers",
        "conteudo": 'Os receptores de transmissão simplesmente respondem às mensagens de transmissão de outros aplicativos ou do sistema. Por exemplo, os aplicativos também podem iniciar transmissões para permitir que outros aplicativos saibam que alguns dados foram baixados para o dispositivo e estão disponíveis para uso, portanto, este é o receptor de transmissão que interceptará essa comunicação e iniciará a ação apropriada. Um receptor de transmissão é implementado como uma subclasse da classe BroadcastReceiver e cada mensagem é transmitida como um objeto Intent',
        "modulo_id": 1,
        "tipo": "material",
        "video": "",
    },
    {
        "id": 5,
        "titulo": "Content Providers",
        "conteudo": 'Um componente de provedor de conteúdo fornece dados de um aplicativo para outros, mediante solicitação. Essas solicitações são tratadas pelos  métodos da classe Content Resolver . Os dados podem ser armazenados no sistema de arquivos, no banco de dados ou em qualquer outro lugar inteiramente.  Um provedor de conteúdo é implementado como uma subclasse da classe Provedor de conteúdo e deve implementar um conjunto padrão de APIs que permitem que outros  aplicativos realizem transações',
        "modulo_id": 1,
        "tipo": "video",
        "video": "6vgliLhqgow",
    },
    {
        "id": 6,
        "titulo": "Fragments",
        "conteudo": 'No Android, um  fragment  é um fragmento de uma interface de usuário total. Um fragmento normalmente ocupa apenas parte da tela. Fragmentos são usados ​​dentro de atividades. Os fragmentos podem ser reutilizados em diferentes atividades. Fragments normalmente contém Views e ViewGroups dentro deles',
        "modulo_id": 1,
        "tipo": "material",
        "video": "",
    },
    {
        "id": 7,
        "titulo": "Layout XML Files",
        "conteudo": 'Atividades, fragmentos e alguns ViewGroups podem usar arquivos XML para definir seu layout  e conteúdo. Os arquivos XML de layout especificam quais componentes GUI uma atividade ou  fragmento contém, bem como o estilo dos componentes GUI (tamanho, margens, preenchimento etc.)',
        "modulo_id": 2,
        "tipo": "video",
        "video": "w013vtmn70I",
    },
    {
        "id": 8,
        "titulo": "Intents",
        "conteudo": 'As intents do Android são pequenos objetos que uma atividade pode passar para o sistema operacional Android, para informar ao sistema operacional que alguma outra ação ou atividade é necessária. Por exemplo, um aplicativo de fotos pode enviar uma intenção ao sistema operacional quando o usuário opta por compartilhar uma foto. A intenção descreve a “ação de compartilhamento”. Outros aplicativos que sabem realizar a “ação de compartilhamento” podem então ser abertos e o compartilhamento pode ser realizado por meio de outro aplicativo',
        "modulo_id": 2,
        "tipo": "material",
        "video": "",
    },
    {
        "id": 9,
        "titulo": "Widgets",
        "conteudo": 'Widgets Android   são componentes GUI que podem ser exibidos fora de uma atividade. Por exemplo, um widget de previsão do tempo mostrando o clima de hoje é mostrado em muitas telas iniciais do Android. Os widgets são implementados e empacotados como parte de um aplicativo Android. Às vezes, as visualizações no Android também são chamadas de “widgets”. Por exemplo, muitos  dos componentes da GUI (subclasses de View) estão localizados em um pacote Java chamado android.widget. Porém, os componentes da GUI não são iguais a um widget que pode ficar na tela inicial de um dispositivo Android. Portanto, tenha cuidado ao ler sobre o Android para fazer uma distinção entre os componentes GUI que podem ser usados ​​dentro de View Groups, Fragments and Activities (e também dentro de Widgets) e Widgets que podem ficar na tela inicial do dispositivo Android.',
        "modulo_id": 2,
        "tipo": "video",
        "video": "h31mY2jJAWY",
    },
    {
        "id": 10,
        "titulo": "Views and View Groups",
        "conteudo": 'Os elementos da GUI do Android se enquadram em três categorias: Atividades, Visualizações e Grupos de visualizações. As atividades são as telas / janelas. As visualizações são os elementos individuais da GUI, como uma Visualização de texto exibindo um texto, um botão no qual os usuários podem clicar, etc. Grupos de visualizações são contêineres para visualizações. Um grupo de visualizações agrupa uma coleção de visualizações.  As visualizações e grupos de visualizações podem ser aninhados dentro de uma atividade ou dentro de um fragmento (que é novamente aninhado dentro de uma atividade)',
        "modulo_id": 2,
        "tipo": "material",
        "video": "",
    },
    {
        "id": 11,
        "titulo": "Resources do Android",
        "conteudo": `Os recursos no Android referem-se a coisas como imagens, strings e outros materiais que seu aplicativo usa, mas não está na forma de algum código-fonte de linguagem de programação. 
        Os layouts de IU são outro tipo de recurso. Você criará esses layouts usando uma ferramenta 
        estruturada, como um construtor de GUI de arrastar e soltar do IDE ou manualmente em 
        formato XML. Às vezes, sua IU funcionará em todos os tipos de dispositivos: telefones, 
        tablets, televisores, etc. Às vezes, sua IU precisará ser adaptada para ambientes diferentes.
        Você poderá colocar recursos em conjuntos de recursos que indicam sob quais circunstâncias 
        esses recursos podem ser usados ​​(por exemplo, use-os para telas de tamanho normal, mas use-os
        para telas maiores).
        
        Arquivo AndroidManifest.xml
        
        O  arquivo AndroidManifest.xml  contém informações de seu pacote , incluindo componentes do aplicativo, como atividades, serviços, receptores de transmissão, provedores de conteúdo, etc. Ele também executa algumas outras tarefas:
        
        . É  responsável por proteger o aplicativo  para acessar quaisquer partes protegidas, fornecendo as permissões.
        . Ele também  declara a API do Android  que o aplicativo usará.
        . Ele  lista as classes de instrumentação . As classes de instrumentação fornecem perfis e outras informações. Essas informações são removidas pouco antes da publicação do aplicativo, etc.
        Este é o arquivo xml necessário para todos os aplicativos Android e está localizado dentro do diretório raiz.
        
        
        Codigo dessa bosta ai
        
        1.    <manifest  xmlns: android = ”http://schemas.android.com/apk/res/android”
        2. pacote = ”com.techPlayOn.hello”
        
        3. android: versionCode = ”1 ″
        
        4. android: versionName = ”1.0 ″  >
        
        5
        
        6.         <usa-sdk
        
        7. android: minSdkVersion = ”8 ″
        
        8. android: targetSdkVersion = ”15 ″  />
        
        9
        
        10.      <aplicação
        
        11. android: icon = ”@ drawable / ic_launcher”
        
        12. android: label = ”@ string / app_name”
        
        13. android: theme = ”@ style / AppTheme”  >
        
        14.          <atividade
        
        15. android: name = ”. MainActivity”
        
        16. android: label = ”@ string / title_activity_main”  >
        
        17.              <intent-filter>
        
        18.                  <action  android: name = ”android.intent.action.MAIN”  />
        
        19
        
        20.                  <categoria  android: name = ”android.intent.category.LAUNCHER”  />
        
        21.              </intent-filter>
        
        22.          </activity>
        
        23.      </application>
        
        24
        
        25. </manifest>`,
        "modulo_id": 2,
        "tipo": "video",
        "video": "Y00MG81GuXQ",
    },
    {
        "id": 12,
        "titulo": "AndroidManifest.xml",
        "conteudo": `1° <manifest>
    
        manifest  é o elemento raiz do arquivo AndroidManifest.xml. Possui   atributo de pacote que descreve o nome do pacote da classe de atividade.
        
        2° <application>
        
        application é o subelemento do manifesto. Inclui a declaração de namespace. Este elemento contém vários subelementos que declaram o componente do aplicativo, como atividade etc.  Os atributos comumente usados ​​são deste elemento são ícone , rótulo , tema etc.     
        
        android: o ícone representa o ícone de todos os componentes do aplicativo Android.  
        
        android: label funciona como o rótulo padrão para todos os componentes do aplicativo.  
        
        android: theme representa um tema comum para todas as atividades do Android.
        
        3° <activity>
        
        activity é o subelemento do aplicativo e representa uma atividade que deve ser definida no arquivo AndroidManifest.xml. Possui muitos atributos, como rótulo, nome, tema, modo de lançamento, etc.  
        
        android: o rótulo representa um rótulo, ou seja, exibido na tela. 
        
        android: name representa um nome para a classe de atividade. É um atributo obrigatório. 
        
        4° <intent-filter>
        
        intent-filter é o subelemento da atividade que descreve o tipo de intenção ao qual a atividade, serviço ou receptor de transmissão pode responder. 
        
        5° <action>
        
        Ele adiciona uma ação para o filtro de intenção. O intent-filter deve ter pelo menos um elemento de ação.
        
        6° <category>
        
        Ele adiciona um nome de categoria a um intent-filter.`,
        "modulo_id": 2,
        "tipo": "material",
        "video": "",
    },
    {
        "id": 99,
        "titulo": "",
        "conteudo": '',
        "modulo_id": 0,
        "tipo": "material",
        "video": "",
    },
    ]

    const [aulasParaExibir,setAulasParaExibir] = useState(aulas.filter(a => a["modulo_id"] === 1))
    
    const modulos = [
        {
          "id":1,
          "nome":"Componentes Básicos",
        },
        {
            "id":2,
            "nome":"Componentes Adicionais",
        }
    ]

    function TipoAula(tipo) {
        if (tipo === "video") {
            return "play--v1.png"
        }
        else {
            return "info.png"
        }
    }

    function collapse() {
        document.getElementById('openMenu').style.width = '3rem';
        document.getElementById('openMenu').style.display = 'block';
        document.getElementById('mid').style.width = '0';
        document.getElementById('titulo').style.display = 'none';
        document.getElementById('closeMenu').style.display = 'none';
        document.getElementById('nav').style.width = '4rem';
    }

    function open() {
        document.getElementById('nav').style.width = '20rem';
        document.getElementById('openMenu').style.width = '20rem';
        document.getElementById('openMenu').style.display = 'none';
        document.getElementById('mid').style.width = '18rem';
        document.getElementById('titulo').style.display = 'block';
        document.getElementById('closeMenu').style.display = 'block';
    }
    
    function handleSelect(e) 
    {
        setAulasParaExibir(aulas.filter(a => a["modulo_id"] === parseInt(e.target.value)))
    }

    function handleClick(id)
    {
       setAula(aulas.filter(a => a.id === parseInt(id))[0])
    }

    function HandleSubmit(e) {
        e.preventDefault()
        
        var aula = aulas.filter(a => a.titulo.match(e.target["search"].value))[0]
        
        if(aula)
        {
            setAula(aula)
        }
        else
        {
            aula =  {
                "id": 99,
                "titulo": "",
                "conteudo": '',
                "modulo_id": 0,
                "tipo": "material",
                "video": "",
            }
            setAula(aula)
        }
    }

    function NightMode() {
        if (modoNoturno) {
            document.body.style.setProperty('--background_color', '#121212');
            document.getElementById('nightModeOn').style.display = 'none';
            document.getElementById('nightModeOff').style.display = 'block';
            setModoNoturno(false)
        }
        else {
            document.body.style.setProperty('--background_color', '#dee2e6');
            document.getElementById('nightModeOn').style.display = 'block';
            document.getElementById('nightModeOff').style.display = 'none';
            setModoNoturno(true)
        }
    }

    return (
        <nav className="nav" id="nav">
            <div className="head">
                <div className="titulo">
                    <h1 id="titulo">Curso de Android</h1>
                    <img src="https://img.icons8.com/ios-filled/50/2dc653/android-os.png" alt="" />
                </div>
            </div>
            <div className="divMenu">
                <button className="openMenu" id="openMenu" onClick={open}>
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/menu--v4.png" alt="" />
                </button>
                <button className="closeMenu" id="closeMenu" onClick={collapse}>
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/x.png" alt="" />
                </button>
            </div>
            <section className="mid" id="mid">
                <div className="modulos">
                    <h1 className="subtitulo"><img src="https://img.icons8.com/ios-glyphs/30/414a4f/search--v1.png" alt="" />Pesquisa</h1>
                    <div className="subsections">
                        <form onSubmit={HandleSubmit}>
                            <input type="text" className="searchInput" name="search" placeholder="Busque aqui no curso" />
                        </form>
                    </div>
                </div>
                <div className="modulos">
                    <h1 className="subtitulo"><img src="https://img.icons8.com/ios-glyphs/30/414a4f/module.png" alt="" />Módulos</h1>
                    <div className="subsections">
                        <select
                            defaultValue={0}
                            onChange={handleSelect}
                        >
                            {
                                modulos.map((modulo, index) => (
                                    <option value={modulo.id} key={modulo.id}>0{modulo.id} . {modulo.nome}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="modulos">
                    <h1 className="subtitulo"><img src="https://img.icons8.com/ios-glyphs/30/414a4f/class.png" alt="" />Aulas</h1>
                    <div className="subsections">
                        {
                            aulasParaExibir.map((aula, index) => (
                                <div className="aulas" onClick={() => handleClick(aula.id)} key={index}><img src={"https://img.icons8.com/ios-glyphs/20/2dc653/" + TipoAula(aula.tipo)} alt="" /><small>{aula.id < 10 ? "0" + aula.id : aula.id}</small> {aula.titulo}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="modulos">
                    <h1 className="subtitulo"><img src="https://img.icons8.com/ios-glyphs/30/414a4f/job.png" alt="" />Configurações</h1>
                    <div className="subsections">
                        <button className="nightMode" onClick={NightMode}>
                            <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/30/414a4f/external-Night-essential-collection-bearicons-glyph-bearicons.png" alt="" id="nightModeOn" className="nightModeOn"/>
                            <img src="https://img.icons8.com/fluency-systems-filled/30/414a4f/sun.png" alt="" id="nightModeOff" className="nightModeOff"/>
                        </button>
                    </div>
                </div>
            </section>
        </nav>
    );
}
