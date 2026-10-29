type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  sections: { heading: string; paragraphs: string[] }[];
  sources?: { label: string; url: string }[];
  mixtures?: { combination: string; whatHappens: string; risk: string }[];
};

export const posts: Post[] = [
  {
    slug: 'perigos-de-misturar-produtos-de-limpeza',
    title: 'Perigos de misturar produtos de limpeza: combinações que você deve evitar',
    description: 'Saiba por que misturar água sanitária, vinagre, amônia ou álcool pode causar intoxicação. Veja a tabela de misturas domésticas perigosas e como agir.',
    category: 'Segurança na limpeza',
    readingTime: '5 min de leitura',
    sections: [
      { heading: 'Por que misturar produtos pode ser perigoso?', paragraphs: [
        'Um produto de limpeza pode ser seguro quando usado conforme o rótulo e ainda assim reagir de forma perigosa ao entrar em contato com outro. A mistura pode liberar gases irritantes, aumentar a exposição a substâncias tóxicas ou comprometer a ação esperada dos produtos.',
        'Cheiro forte, espuma, aquecimento ou mudança de cor não indicam uma limpeza mais potente. Podem ser sinais de uma reação indesejada. A regra mais segura é usar um produto por vez e nunca combinar fórmulas por conta própria.'
      ] },
      { heading: 'Tabela de misturas domésticas perigosas', paragraphs: [
        'As combinações abaixo são exemplos para reconhecer situações de risco. O efeito exato pode variar conforme a composição e a concentração de cada produto. Não faça testes para observar a reação.'
      ] },
      { heading: 'O risco também existe entre uma etapa e outra', paragraphs: [
        'Produtos podem se encontrar acidentalmente no mesmo balde, pano, borrifador ou superfície. Antes de passar para outra etapa da faxina, siga as instruções de remoção ou enxágue do primeiro produto. Use utensílios limpos e mantenha as embalagens originais identificadas.',
        'Se o objetivo for limpar uma superfície suja e depois desinfetá-la, faça as etapas separadamente, respeitando as orientações e o tempo de contato de cada rótulo. Nunca aplique um produto sobre resíduos de outro sem verificar as instruções do fabricante.'
      ] },
      { heading: 'O que fazer se produtos forem misturados por acidente?', paragraphs: [
        'Afaste-se do local e procure ar fresco. Não tente neutralizar a mistura com outro ingrediente e não permaneça no ambiente para investigar o cheiro. Se houver tosse, ardência nos olhos, tontura, náusea ou dificuldade para respirar, procure atendimento de saúde.',
        'No Brasil, o Disque-Intoxicação oferece orientação pelo 0800 722 6001. Se possível, informe os nomes dos produtos envolvidos e tenha as embalagens ou fotos dos rótulos disponíveis para a equipe de saúde.'
      ] },
      { heading: 'Uma regra simples para a próxima faxina', paragraphs: [
        'Leia o rótulo, respeite a diluição e use somente a quantidade indicada. Mantenha o ambiente ventilado e utilize os equipamentos de proteção recomendados. Receitas caseiras vistas nas redes sociais não substituem instruções testadas para cada produto.'
      ] }
    ],
    mixtures: [
      { combination: 'Água sanitária + vinagre ou limpador ácido', whatHappens: 'Pode liberar gás cloro.', risk: 'Irritação dos olhos e das vias respiratórias; exposições mais intensas podem causar falta de ar.' },
      { combination: 'Água sanitária + produto com amônia', whatHappens: 'Pode formar gases tóxicos, incluindo cloraminas.', risk: 'Tosse, ardência e dificuldade para respirar.' },
      { combination: 'Água sanitária + álcool', whatHappens: 'Pode gerar substâncias tóxicas, incluindo clorofórmio.', risk: 'Intoxicação e irritação por vapores.' },
      { combination: 'Água sanitária + outro limpador ou desinfetante', whatHappens: 'A reação depende dos ingredientes do segundo produto e pode liberar vapores perigosos.', risk: 'Irritação ou intoxicação; não é possível presumir segurança sem o rótulo.' }
    ],
    sources: [
      { label: 'Anvisa — misturar produtos de limpeza pode ser perigoso', url: 'https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/misturar-produtos-de-limpeza-nao-e-uma-boa-ideia-e-pode-ser-perigoso' },
      { label: 'Anvisa — cuidados com misturas caseiras', url: 'https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/todo-cuidado-e-pouco-com-as-misturas-caseiras-para-limpeza-1' },
      { label: 'CDC — orientações para usar água sanitária com segurança', url: 'https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html' }
    ]
  },
  {
    slug: 'quimica-dos-produtos-de-limpeza-e-riscos-das-misturas',
    title: 'A química dos produtos de limpeza: como funcionam e por que não misturá-los',
    description: 'Entenda como detergentes, água sanitária e desinfetantes agem na limpeza e quais riscos as misturas caseiras podem trazer.',
    category: 'Ciência da limpeza',
    readingTime: '5 min de leitura',
    sections: [
      { heading: 'Por que o detergente remove gordura?', paragraphs: [
        'A água sozinha tem dificuldade para retirar gordura. O detergente contém tensoativos: moléculas com uma parte que interage com a água e outra que se associa ao óleo. Essa dupla afinidade ajuda a desprender a gordura da superfície.',
        'Na água, os tensoativos podem envolver pequenas porções de gordura em estruturas chamadas micelas. Durante o enxágue, essas partículas são carregadas pela água. Esse é o princípio por trás da limpeza de louças e de muitas outras superfícies.',
        'O contato frequente com detergentes pode ressecar a pele. Se você faz limpezas prolongadas, confira as recomendações do rótulo e use proteção adequada para as mãos.'
      ] },
      { heading: 'O que a água sanitária faz de diferente?', paragraphs: [
        'A água sanitária contém hipoclorito de sódio. Sua ação de desinfecção e clareamento ocorre por processos de oxidação. Ela cumpre um papel diferente do detergente, que ajuda a retirar sujeira e gordura.',
        'Antes de desinfetar uma superfície visivelmente suja, faça a limpeza conforme a orientação do produto. Use água sanitária apenas nas superfícies indicadas, na diluição recomendada no rótulo e em local ventilado. Mais produto não significa necessariamente melhor resultado.'
      ] },
      { heading: 'Por que o tempo de contato importa?', paragraphs: [
        'Um desinfetante precisa permanecer na superfície pelo tempo indicado na embalagem para alcançar o efeito declarado pelo fabricante. Secar a área imediatamente após aplicar o produto pode reduzir sua eficácia.',
        'O tempo necessário varia conforme a formulação e a finalidade. Leia o rótulo, mantenha a superfície úmida pelo período indicado e observe se o fabricante exige enxágue depois do uso.'
      ] },
      { heading: 'Quais misturas caseiras devem ser evitadas?', paragraphs: [
        'Não misture produtos de limpeza, a menos que o próprio rótulo permita expressamente a combinação. Água sanitária com vinagre ou outros ácidos pode liberar gás cloro. Com produtos que contenham amônia, pode formar gases irritantes e tóxicos. Também não combine água sanitária com álcool ou outros saneantes.',
        'Misturar vinagre e bicarbonato em um recipiente fechado pode aumentar a pressão devido à formação de gás. A espuma não é prova de maior poder de limpeza. Receitas divulgadas nas redes sociais não substituem as instruções de uso dos fabricantes.'
      ] },
      { heading: 'Como limpar e desinfetar com segurança?', paragraphs: [
        'Escolha um produto apropriado para cada tarefa e siga o modo de uso. Se precisar limpar e depois desinfetar a mesma superfície, conclua a primeira etapa, remova os resíduos conforme o rótulo e só então use o desinfetante indicado. Nunca aplique produtos diferentes ao mesmo tempo.',
        'Mantenha o ambiente ventilado, use luvas ou outros equipamentos quando o rótulo recomendar e guarde os produtos nas embalagens originais, fora do alcance de crianças e animais.'
      ] },
      { heading: 'O que fazer se uma mistura causar mal-estar?', paragraphs: [
        'Saia do ambiente e vá para um local ventilado. Não tente neutralizar a mistura adicionando outro produto. Se houver ardência, tosse, tontura, náusea ou dificuldade para respirar, procure atendimento de saúde. No Brasil, o Disque-Intoxicação atende pelo 0800 722 6001.'
      ] }
    ],
    sources: [
      { label: 'Anvisa — riscos de misturar produtos de limpeza', url: 'https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/misturar-produtos-de-limpeza-nao-e-uma-boa-ideia-e-pode-ser-perigoso' },
      { label: 'CDC — uso seguro de água sanitária', url: 'https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html' },
      { label: 'EPA — tempo de contato de desinfetantes', url: 'https://www.epa.gov/pesticide-registration/selected-epa-registered-disinfectants' },
      { label: 'American Chemical Society — como os detergentes removem gordura', url: 'https://www.acs.org/education/whatischemistry/landmarks/tidedetergent.html' }
    ]
  },
  {
    slug: 'rotina-de-limpeza-mais-pratica',
    title: 'Como organizar uma rotina de limpeza mais prática',
    description: 'Um guia simples para dividir as tarefas de limpeza e manter os ambientes em ordem sem acumular trabalho.',
    category: 'Organização',
    readingTime: '3 min de leitura',
    sections: [
      { heading: 'Comece pelo que mais precisa de atenção', paragraphs: ['Observe os ambientes de maior uso e anote as tarefas que precisam ser feitas diariamente, semanalmente e com menor frequência. Essa divisão ajuda a distribuir o trabalho ao longo da semana.'] },
      { heading: 'Siga uma ordem', paragraphs: ['Ao limpar um cômodo, comece pelas superfícies mais altas e termine pelo piso. Separe os materiais antes de começar para evitar interrupções.'] },
      { heading: 'Mantenha a rotina possível', paragraphs: ['Reserve períodos curtos para pequenas tarefas e ajuste o planejamento à sua realidade. A constância costuma ser mais útil do que concentrar tudo em um único dia.'] }
    ]
  },
  {
    slug: 'cuidados-ao-usar-produtos-de-limpeza',
    title: 'Cuidados básicos ao usar produtos de limpeza',
    description: 'Leia os rótulos, use os produtos conforme as instruções e mantenha uma rotina de limpeza mais segura.',
    category: 'Cuidados',
    readingTime: '3 min de leitura',
    sections: [
      { heading: 'Leia o rótulo antes de usar', paragraphs: ['Confira a indicação de uso, a forma de aplicação, as recomendações de proteção e as instruções de armazenamento de cada produto. Siga as orientações da embalagem para a superfície que você deseja limpar.'] },
      { heading: 'Evite misturar produtos', paragraphs: ['Não combine produtos de limpeza entre si. Misturas podem gerar reações perigosas ou reduzir o resultado esperado. Use um produto de cada vez e siga o rótulo.'] },
      { heading: 'Guarde com cuidado', paragraphs: ['Mantenha os produtos na embalagem original, fechados e fora do alcance de crianças e animais. Dê preferência a um local ventilado e protegido do calor.'] }
    ]
  },
  {
    slug: 'como-planejar-a-compra-de-produtos-de-limpeza',
    title: 'Como planejar a compra de produtos de limpeza',
    description: 'Aprenda a conferir o estoque, identificar as necessidades da casa e comprar produtos de limpeza com mais organização.',
    category: 'Economia',
    readingTime: '2 min de leitura',
    sections: [
      { heading: 'Confira o que você já tem', paragraphs: ['Antes de sair para comprar, veja quais produtos ainda estão disponíveis e quais estão perto do fim. Uma lista evita compras repetidas.'] },
      { heading: 'Pense nas superfícies e na frequência de uso', paragraphs: ['Considere os espaços que você limpa com mais frequência e escolha produtos adequados às indicações de cada embalagem. Assim, a compra atende às necessidades reais da rotina.'] },
      { heading: 'Organize o armazenamento', paragraphs: ['Guarde os produtos em um local definido e mantenha as embalagens identificadas. Isso facilita encontrar o que você precisa e acompanhar o estoque.'] }
    ]
  }
];
