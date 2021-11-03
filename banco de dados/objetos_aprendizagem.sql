-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 02-Nov-2021 às 19:53
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `objetos_aprendizagem`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `aula`
--

DROP TABLE IF EXISTS `aula`;
CREATE TABLE IF NOT EXISTS `aula` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `conteudo` text NOT NULL,
  `modulo_id` int(11) NOT NULL,
  `tipo` enum('video','atividade','material','') NOT NULL,
  `descricao` text NOT NULL,
  `video` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `aula`
--

INSERT INTO `aula` (`id`, `titulo`, `conteudo`, `modulo_id`, `tipo`, `descricao`, `video`) VALUES
(1, 'Componentes Básicos', 'Os componentes do aplicativo são os blocos de construção essenciais de um aplicativo Android. Esses componentes são fracamente acoplados pelo arquivo de manifesto do  aplicativo Android Manifest.xml, que descreve cada componente do aplicativo e  como eles interagem.  \"Temos quatro componentes básicos, entre eles temos as Activities que ditam a IU e lidam com a interação do usuário com a tela do smartphone, os Services que lidam com o processamento em segundo plano associado a um aplicativo, os Broadcast Receivers que lidam com a comunicação entre o  sistema operacional Android e os aplicativos e os Content Providers que lidam com problemas de gerenciamento de dados e banco de dados', 1, 'video', '', 'n3n-XMNBOf4'),
(2, 'Activities', 'Um aplicativo Android é um aplicativo Android. Um aplicativo é empacotado em um arquivo APK (pacote de aplicativo Android). \r\nO arquivo APK contém o código Java compilado e outros recursos como textos e imagens para o aplicativo Android.', 1, 'material', '', 'YFZ98iIFYuo'),
(3, 'Services', 'Os serviços Android são processos em segundo plano que podem ser executados em um dispositivo Android, mesmo que nenhum aplicativo esteja visível.  Os serviços não precisam de uma interface de usuário. Um serviço pode, por exemplo, verificar se há atualizações em um servidor remoto ou fazer backup de dados a cada hora etc.  Por exemplo, um serviço pode reproduzir música em segundo plano enquanto o usuário está em um aplicativo diferente ou pode buscar dados na rede sem bloquear o usuário interação  com uma atividade', 1, 'video', '', 'yAKn54OsiIQ'),
(4, 'Broadcast Receivers', 'Os receptores de transmissão simplesmente respondem às mensagens de transmissão de outros aplicativos ou do sistema. Por exemplo, os aplicativos \r\ntambém podem iniciar transmissões para permitir que outros aplicativos saibam que alguns dados foram baixados para o dispositivo e estão \r\ndisponíveis para uso, portanto, este é o receptor de transmissão que interceptará essa comunicação e iniciará a ação apropriada. \r\nUm receptor de transmissão é implementado como uma subclasse da classe BroadcastReceiver e cada mensagem é transmitida como um objeto Intent', 1, 'material', '', NULL),
(5, 'Content Providers', 'Um componente de provedor de conteúdo fornece dados de um aplicativo para outros, mediante solicitação. Essas solicitações são tratadas pelos  métodos da classe Content Resolver . Os dados podem ser armazenados no sistema de arquivos, no banco de dados ou em qualquer outro lugar inteiramente.  Um provedor de conteúdo é implementado como uma subclasse da classe Provedor de conteúdo e deve implementar um conjunto padrão de APIs que permitem que outros  aplicativos realizem transações', 1, 'video', '', '6vgliLhqgow'),
(6, 'Fragments', 'No Android, um  fragment  é um fragmento de uma interface de usuário total. Um fragmento \r\nnormalmente ocupa apenas parte da tela. Fragmentos são usados ​​dentro de atividades. \r\nOs fragmentos podem ser reutilizados em diferentes atividades. Fragments normalmente contém \r\nViews e ViewGroups dentro deles', 1, 'material', '', NULL),
(7, 'Layout XML Files\r\n', 'Atividades, fragmentos e alguns ViewGroups podem usar arquivos XML para definir seu layout  e conteúdo. Os arquivos XML de layout especificam quais componentes GUI uma atividade ou  fragmento contém, bem como o estilo dos componentes GUI (tamanho, margens, preenchimento etc.)', 2, 'video', '', 'w013vtmn70I'),
(8, 'Intents', 'As intents do Android são pequenos objetos que uma atividade pode passar para o sistema \r\noperacional Android, para informar ao sistema operacional que alguma outra ação ou \r\natividade é necessária. Por exemplo, um aplicativo de fotos pode enviar uma intenção ao \r\nsistema operacional quando o usuário opta por compartilhar uma foto. A intenção descreve \r\na “ação de compartilhamento”. Outros aplicativos que sabem realizar a “ação de \r\ncompartilhamento” podem então ser abertos e o compartilhamento pode ser realizado por \r\nmeio de outro aplicativo', 2, 'material', '', NULL),
(9, 'Widgets', 'Widgets Android   são componentes GUI que podem ser exibidos fora de uma atividade. \r\nPor exemplo, um widget de previsão do tempo mostrando o clima de hoje é mostrado em muitas \r\ntelas iniciais do Android. Os widgets são implementados e empacotados como parte de um \r\naplicativo Android.\r\n\r\nÀs vezes, as visualizações no Android também são chamadas de “widgets”. Por exemplo, muitos \r\ndos componentes da GUI (subclasses de View) estão localizados em um pacote Java chamado \r\nandroid.widget. Porém, os componentes da GUI não são iguais a um widget que pode ficar na \r\ntela inicial de um dispositivo Android. Portanto, tenha cuidado ao ler sobre o Android para \r\nfazer uma distinção entre os componentes GUI que podem ser usados ​​dentro de View Groups, \r\nFragments and Activities (e também dentro de Widgets) e Widgets que podem ficar na tela \r\ninicial do dispositivo Android.', 2, 'video', '', 'h31mY2jJAWY'),
(10, 'Views and View Groups', 'Os elementos da GUI do Android se enquadram em três categorias: Atividades, Visualizações e \r\nGrupos de visualizações. As atividades são as telas / janelas. As visualizações são os \r\nelementos individuais da GUI, como uma Visualização de texto exibindo um texto, um botão no \r\nqual os usuários podem clicar, etc. Grupos de visualizações são contêineres para \r\nvisualizações. Um grupo de visualizações agrupa uma coleção de visualizações. \r\nAs visualizações e grupos de visualizações podem ser aninhados dentro de uma atividade ou \r\ndentro de um fragmento (que é novamente aninhado dentro de uma atividade)', 2, 'material', '', NULL),
(11, 'Resources do Android', 'Os recursos no Android referem-se a coisas como imagens, strings e outros materiais que seu \r\naplicativo usa, mas não está na forma de algum código-fonte de linguagem de programação. \r\nOs layouts de IU são outro tipo de recurso. Você criará esses layouts usando uma ferramenta \r\nestruturada, como um construtor de GUI de arrastar e soltar do IDE ou manualmente em \r\nformato XML. Às vezes, sua IU funcionará em todos os tipos de dispositivos: telefones, \r\ntablets, televisores, etc. Às vezes, sua IU precisará ser adaptada para ambientes diferentes.\r\n Você poderá colocar recursos em conjuntos de recursos que indicam sob quais circunstâncias \r\nesses recursos podem ser usados ​​(por exemplo, use-os para telas de tamanho normal, mas use-os\r\npara telas maiores).\r\n\r\n Arquivo AndroidManifest.xml\r\n\r\nO  arquivo AndroidManifest.xml  contém informações de seu pacote , incluindo componentes do aplicativo, como atividades, serviços, receptores de transmissão, provedores de conteúdo, etc. Ele também executa algumas outras tarefas:\r\n\r\n. É  responsável por proteger o aplicativo  para acessar quaisquer partes protegidas, fornecendo as permissões.\r\n. Ele também  declara a API do Android  que o aplicativo usará.\r\n. Ele  lista as classes de instrumentação . As classes de instrumentação fornecem perfis e outras informações. Essas informações são removidas pouco antes da publicação do aplicativo, etc.\r\nEste é o arquivo xml necessário para todos os aplicativos Android e está localizado dentro do diretório raiz.\r\n\r\n\r\nCodigo dessa bosta ai\r\n\r\n1.    <manifest  xmlns: android = ”http://schemas.android.com/apk/res/android”\r\n2. pacote = ”com.techPlayOn.hello”\r\n\r\n3. android: versionCode = ”1 ″\r\n\r\n4. android: versionName = ”1.0 ″  >\r\n\r\n5\r\n\r\n6.         <usa-sdk\r\n\r\n7. android: minSdkVersion = ”8 ″\r\n\r\n8. android: targetSdkVersion = ”15 ″  />\r\n\r\n9\r\n\r\n10.      <aplicação\r\n\r\n11. android: icon = ”@ drawable / ic_launcher”\r\n\r\n12. android: label = ”@ string / app_name”\r\n\r\n13. android: theme = ”@ style / AppTheme”  >\r\n\r\n14.          <atividade\r\n\r\n15. android: name = ”. MainActivity”\r\n\r\n16. android: label = ”@ string / title_activity_main”  >\r\n\r\n17.              <intent-filter>\r\n\r\n18.                  <action  android: name = ”android.intent.action.MAIN”  />\r\n\r\n19\r\n\r\n20.                  <categoria  android: name = ”android.intent.category.LAUNCHER”  />\r\n\r\n21.              </intent-filter>\r\n\r\n22.          </activity>\r\n\r\n23.      </application>\r\n\r\n24\r\n\r\n25. </manifest>', 2, 'video', '', 'Y00MG81GuXQ'),
(12, 'AndroidManifest.xml', '1° <manifest>\r\n\r\nmanifest  é o elemento raiz do arquivo AndroidManifest.xml. Possui   atributo de pacote que descreve o nome do pacote da classe de atividade.\r\n\r\n2° <application>\r\n\r\napplication é o subelemento do manifesto. Inclui a declaração de namespace. Este elemento contém vários subelementos que declaram o componente do aplicativo, como atividade etc.  Os atributos comumente usados ​​são deste elemento são ícone , rótulo , tema etc.     \r\n\r\n android: o ícone representa o ícone de todos os componentes do aplicativo Android.  \r\n\r\n android: label funciona como o rótulo padrão para todos os componentes do aplicativo.  \r\n\r\n android: theme representa um tema comum para todas as atividades do Android.\r\n\r\n3° <activity>\r\n\r\nactivity é o subelemento do aplicativo e representa uma atividade que deve ser definida no arquivo AndroidManifest.xml. Possui muitos atributos, como rótulo, nome, tema, modo de lançamento, etc.  \r\n\r\nandroid: o rótulo representa um rótulo, ou seja, exibido na tela. \r\n\r\nandroid: name representa um nome para a classe de atividade. É um atributo obrigatório. \r\n\r\n4° <intent-filter>\r\n\r\nintent-filter é o subelemento da atividade que descreve o tipo de intenção ao qual a atividade, serviço ou receptor de transmissão pode responder. \r\n\r\n5° <action>\r\n\r\nEle adiciona uma ação para o filtro de intenção. O intent-filter deve ter pelo menos um elemento de ação.\r\n\r\n6° <category>\r\n\r\nEle adiciona um nome de categoria a um intent-filter.', 2, 'material', '', NULL),
(99, '', '', 0, 'material', '', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `modulo`
--

DROP TABLE IF EXISTS `modulo`;
CREATE TABLE IF NOT EXISTS `modulo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `modulo`
--

INSERT INTO `modulo` (`id`, `nome`) VALUES
(1, 'Componentes Básicos'),
(2, 'Componentes Adicionais\r\n');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
