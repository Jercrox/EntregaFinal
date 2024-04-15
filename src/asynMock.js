/*const products = [
    {
        id:'1',
        name:'Antiparra Speedo Biofuse Rift Mask AU',
        price:'31999',
        category:'Accesorios',
        img:'../src/assets/accesorios/antiparra-speedo-biofuse-rift-mask.jpg',
        stock:'6',
        description:'Con tecnología Speedo Biofuse® para una comodidad acolchada cada vez que nadas El sello súper suave se adapta a la forma de tu cara. Lentes Wide Vision para una visión periférica mejorada Ajuste con botón para un ajuste rápido y sencillo Diseño de correa ancha dividida para un ajuste cómodo y seguro Lentes transparentes para condiciones de poca luz y máxima visibilidad Lente antifog con protección UV Composición: Lente de policarbonato, sellado de caucho termoplástico (TPR) y tira de silicona.'
    },
    {
        id:'10',
        name:'Malla Natación Speedo Fit Powermesh Pro Jamm',
        price:'76999',
        category:'Hombre',
        img:'../src/assets/hombre/malla_nataci_n_speedo_fit_powermesh_pro_jamm_8_s2_2.jpg',
        stock:'9',
        description:'Traje de baño hasta la rodilla con tecnología de compresión de mesh en los muslos que aumenta la sensibilidad muscular y ayuda a mejorar la posición del cuerpo en el agua, lo que permite nadar más rápido y por más tiempo.El diseño de corte en V provee confort y seguridad adicional'
    },
    {
        id:'11',
        name:'Malla Natación Speedo Chevron Spice Jammer AM',
        price:'63999',
        category:'Hombre',
        img:'../src/assets/hombre/malla_nataci_n_speedo_chevron_spice_jamm_s20060050_5__1.jpg',
        stock:'7',
        description:'Traje de baño hasta la rodilla con monogramas laterales cruzados en ambos lados. Cintura con cordón para un mejor y seguro calce.'
    },
    {
        id:'12',
        name:'Malla Natación Speedo ECO Endurance+ Pro Jammer AM',
        price:'91999',
        category:'Hombre',
        img:'../src/assets/hombre/malla-natacion-hombre-speedo-eco-endurance-pro-jammer-s20060065-550_3_.jpg',
        stock:'7',
        description:'Traje de baño Jammer hasta la rodilla de alto rendimiento. Posee una banda de silicona en la cintura y un cordón plano para un ajuste personalizado. El diseño de corte en V con forro de goma garantiza que te sientas sostenido y cómodo. Realizado en tejido ECO Endurance+ Pro, 100% resistente al cloro, de secado rápido y hecho de materiales 50% reciclados y tiene el agregado beneficio de tener un acabado con un tratamiento repelente al agua y antimicrobiano.'
    },
    {
        id:'13',
        name:'Short Natación Speedo Printed Leisure',
        price:'54999',
        category:'Hombre',
        img:'../src/assets/hombre/short-natacion-speedo-printed-leisure-14-ws-am-s20070026-550_2_.jpg',
        stock:'20',
        description:'Ideal para la playa y la piscina, el Watershort de 14” hecho de tela con un acabado cepillado para una sensación más suave al tacto. Posee drenaje en sus bolsillos laterales para sentirse liviano dentro y fuera del agua. La cintura con cordón te permite ajustar el calce para mayor comodidad. Fabricado 100%de residuos post-consumo 100% reciclados. Forrado en su interior.'
    },
    {
        id:'14',
        name:'Short Natación Speedo Sport Logo',
        price:'45999',
        category:'Hombre',
        img:'../src/assets/hombre/short-natacion-hombre-speedo-sport-logo-16-ws-s20070022-169_2_.jpg',
        stock:'22',
        description:'Nuestro clásico watershort con un toque deportivo. Te lleva de entrenar en la piscina a juegos activos en la playa. Su cordón en la cintura permite un ajuste personalizado para mayor comodidad. Posee bolsillos laterales con drenaje asegura que el short de agua se sienta liviano y cómodo, mientras que el acabado repelente al agua lo mantiene seco al tacto. Nuestro tejido ecológico Xpress Lite Eco es ligero y está fabricado con poliéster 100 % reciclado. Forrado en su interior.'
    },
    {
        id:'15',
        name:'Short Natación Speedo Boom Logo',
        price:'47999',
        category:'Hombre',
        img:'../src/assets/hombre/short-natacion-hombre-speedo-boom-logo-16-am-s20070023-568_3_.jpg',
        stock:'40',
        description:'Relajate en la piscina y en la playa con nuestros icónico Watershort con drenaje en el bolsillo trasero y lateral que lo hace ligero dentro y fuera del agua, mientras que la cintura con cordón permite un ajuste a la medida. Su tejido de Nylon 100 % reciclado para que el medio ambiente también se beneficie. Forrado en su interior.'
    },
    {
        id:'16',
        name:'Malla Natación Speedo Medley Logo Aquashort',
        price:'17549',
        category:'Hombre',
        img:'../src/assets/hombre/malla-natacion-hombre-speedo-medley-logo-aquashort-s20060080-552_2_.jpg',
        stock:'27',
        description:'Sentite cómodo durante el entrenamiento usando el Medley Aquashort de nuestra gama Essentials, con cordón ajustable en la cintura y un elegante diseño.'
    },
    {
        id:'17',
        name:'Malla Natación Speedo ECO Endurance+ Splice Aquashort',
        price:'69999',
        category:'Hombre',
        img:'../src/assets/hombre/malla-natacion-hombre-speedo-eco-endurance-splice-aquashort-s20060069-558_3_.jpg',
        stock:'48',
        description:'Traje de baño Aquashort de longitud media, diseñado con un panel lateral bicolor y cintura con cordón permite un ajuste cómodo y seguro para un mejor desempeño. Duradero y ecológico el tejido ECO Endurance+, es 100% resistente al cloro, de secado rápido y fabricado con un 50% de materiales reciclado.'
    },
    {
        id:'18',
        name:'Malla Natación Speedo Fit Powermesh Pro Aquashort',
        price:'69999',
        category:'Hombre',
        img:'../src/assets/hombre/malla-natacion-hombre-speedo-fit-powermesh-pro-aquashort-s20020040605_4__1.jpg',
        stock:'20',
        description:'Traje de baño short (27cm de largo) con tecnología de compresión de mesh en los muslos que aumenta la sensibilidad muscular y ayuda a mejorar la posición del cuerpo en el agua, lo que permite nadar más rápido y por más tiempo. El diseño de corte en V provee confort y seguridad adicional. Tecnología Powerflex+ de alta resistencia al cloro y material muy liviano que mantiene la forma y elasticidad. Protección solar UPF50+.Traje de baño short (27cm de largo) con tecnología de compresión de mesh en los muslos que aumenta la sensibilidad muscular y ayuda a mejorar la posición del cuerpo en el agua, lo que permite nadar más rápido y por más tiempo. El diseño de corte en V provee confort y seguridad adicional. Tecnología Powerflex+ de alta resistencia al cloro y material muy liviano que mantiene la forma y elasticidad. Protección solar UPF50+.'
    },
    {
        id:'19',
        name:'Malla Natación Speedo Hyperboom Placement Muscleback',
        price:'84999',
        category:'Mujer',
        img:'../src/assets/mujer/malla-natacion-speedo-mujer-hyperboom-placement-mbck-s20060056-706_1__2.jpg',
        stock:'20',
        description:'Celebrando la marca Speedo, nuestro traje de baño deportivo Hyperboom Muscleback muestra nuestro icónico logotipo de Boom en una versión graduada de nuestro diseño de estampado con tonos vivos de rojo y negro. El diseño muscleback y la pernera de corte medio ofrecen flexibilidad y libertad de movimiento para que puedas nadar con comodidad. Diseñado para ser duradero y mejor para el medio ambiente, el traje cuenta con nuestro nuevo tejido ECO Endurance+ que es 100 % resistente al cloro, de secado rápido y fabricado con un 50 % de materiales reciclados.'
    },
    {
        id:'2',
        name:'Antiparra Speedo Biofuse Mask Infantil',
        price:'16999',
        category:'Accesorios',
        img:'../src/assets/accesorios/antiparra-speedo-biofuse-mask-infantil.jpg',
        stock:'7',
        description:'La antiparra Speedo Biofuse Mask cuenta con tecnología Speedo Biofuse y un ajuste lateral de velcro para un ajuste rápido y fácil. Recomendado para niños de 2 a 6 años.'
    },
    {
        id:'20',
        name:'Malla Natación Speedo ECO Endurance+ Essential Medalist',
        price:'64999',
        category:'Mujer',
        img:'../src/assets/mujer/malla-natacion-mujer-speedo-eco-endurance-essential-medalist-af-s20060077-700_3_.jpg',
        stock:'23',
        description:'Nuestro clásico traje de baño Medalist ahora con nuestro tejido ECO Endurance+ super resistente, hecho de 50% materiales reciclados. '
    },
    {
        id:'21',
        name:'Malla Natación Speedo Fit Laneback',
        price:'68999',
        category:'Mujer',
        img:'../src/assets/mujer/malla_nataci_n_speedo_fit_laneback_10__3.jpg',
        stock:'23',
        description:'Traje de baño de una pieza abierto en la espalda y con leve soporte de busto.Tiras a contratono e impresión digital lateral.'
    },
    {
        id:'22',
        name:'Malla Natación Speedo Hydractive',
        price:'69999',
        category:'Mujer',
        img:'../src/assets/mujer/s2.006.0046-557-a.jpg',
        stock:'80',
        description:'Traje de baño de dos piezas con tiras cruzadas. El corpiño cuenta con panel de mesh para ventilación y drenaje del agua '
    },
    {
        id:'23',
        name:'Malla Natación Speedo Eco Endurance+ Thinstrap',
        price:'69999',
        category:'Mujer',
        img:'../src/assets/mujer/malla-mujer-natacion-speedo-eco-endurance-thinstrap-2p-af-s20060076-430_3_.jpg',
        stock:'50',
        description:'Traje de baño de dos piezas con tiras de sujeción delgadas. Diseñado para ser duradero y amigable para el medio ambiente, está hecho de nuestro nuevo tejido ECO Endurance+, 100% resistente al cloro, de secado rápido y fabricado con un 50% de materiales reciclados.'
    },
    {
        id:'24',
        name:'Speedo Essential Endurance Legsuit',
        price:'82999',
        category:'Mujer',
        img:'../src/assets/mujer/essential-endurance-legsuit-af-s2.006.0002-550-a.jpg',
        stock:'19',
        description:'Para un look clásico que nunca pasa de moda nuestro traje Legsuit brinda mayor cobertura y soporte adicional para que puedas tomar tu clase de fitness o sesión de entrenamiento con comodidad y confianza. 100% resistente al cloro, nuestro Endurance+ garantiza que tu traje quede como nuevo durante más tiempo y secado rápido después de tu entrenamiento de natación.'
    },
    {
        id:'25',
        name:'Malla Natación Speedo Hyperboom Splice Legsuit',
        price:'90999',
        category:'Mujer',
        img:'../src/assets/mujer/malla-natacion-mujer-speedo-hyperboom-splice-legsuit-s20060057-555_3_.jpg',
        stock:'30',
        description:'Nuestro traje de baño deportivo de una pieza con longitud de pierna larga tipo calza posee en su diseño un empalme de paneles laterales que estilizan la figura, ideal para nadadores que buscan una cobertura adicional. El forro en su busto garantiza agarre y comodidad durante el entrenamiento. El traje cuenta con nuestro nuevo tejido ECO Endurance+ que es 100 % resistente al cloro, de secado rápido y fabricado con un 50% de materiales reciclados'
    },
    {
        id:'26',
        name:'Malla Natación Speedo Panel Tankini',
        price:'90999',
        category:'Mujer',
        img:'../src/assets/mujer/malla-natacion-mujer-speedo-panel-tankini-af-s20060062-561_1_.jpg',
        stock:'23',
        description:'Entrena con estilo y comodidad usando nuestro elegante Tankini de dos piezas. Su pantalón corto con cordón en la cintura brinda cobertura adicional y la parte superior posee un soporte ligero forrado para brindar mayor comodidad. Nuestro Tankini se adapta a una variedad de tipos de cuerpo y longitudes diseñado en tejido ECO Endurance+, 100% resistente al cloro, de secado rápido y fabricado con un 50% de materiales reciclados.'
    },
    {
        id:'27',
        name:'Malla Natación Speedo Boom Allover Tankini',
        price:'76999',
        category:'Mujer',
        img:'../src/assets/mujer/s2.006.0048-706-a.jpg',
        stock:'17',
        description:'Speedo Boom Allover es un traje de dos piezas para mujer en versión tankini. Son adecuados para todos los deportes acuáticos, recreación acuática o fitness acuático. El material Speedo Endurance®10 de alta calidad es elástico, gracias a lo cual se adapta maravillosamente al cuerpo y no lo restringe de ninguna manera. También son hasta 10 veces más resistentes al cloro y a la luz solar que los trajes de baño normales. Mantienen su forma y color sólidos durante mucho tiempo.'
    },
    {
        id:'3',
        name:'Tapón de oído Speedo Ergo Junior',
        price:'8999',
        category:'Accesorios',
        img:'../src/assets/accesorios/tapon-de-oido-speedo-ergo-junior.jpg',
        stock:'11',
        description:'Tapón de oído suave y ergonómico de caucho termoplástico. Ideal para niños de 6 a 14 años.'
    },
    {
        id:'4',
        name:'Toalla de natación Speedo Deportiva',
        price:'23999',
        category:'Accesorios',
        img:'../src/assets/accesorios/Toalla.jpg',
        stock:'9',
        description:'Toalla deportiva Speedo,de textura suave y ultra absorbente. Ideal para utilizar al salir de la pileta o, luego del entrenamiento de gimnasio.'
    },
    {
        id:'5',
        name:'Gorra Speedo Polyester adulto',
        price:'7999',
        category:'Accesorios',
        img:'../src/assets/accesorios/GorraAdulto.jpg',
        stock:'12',
        description:'Gorra de natación de poliéster panelada de colores sólidos. Excelente confort, calce muy sencillo y secado rápido.'
    },
    {
        id:'6',
        name:'Patas de Rana Speedo Biofuse',
        price:'91999',
        category:'Accesorios',
        img:'../src/assets/accesorios/patas-de-rana-speedo-biofuse.jpg',
        stock:'7',
        description:'Pata de rana Speedo, de silicona para un máximo confort.  Diseño de doble densidad, paleta rigída y cavidad suave.  Accesorio de entrenamiento, apto para todos los estilos.'
    },
    {
        id:'7',
        name:'Manopla Speedo Biofuse Power Paddle',
        price:'32999',
        category:'Accesorios',
        img:'../src/assets/accesorios/manopla-speedo-biofuse-power-paddle.jpg',
        stock:'17',
        description:'Manopla de paleta rígida y moldeado de goma termoplástica para una óptima transferencia de energía y confort. Con tecnología BioFuse, que ofrece mayor comodidad. Accesorio de entrenamiento, apto todos los estilos.'
    },
    {
        id:'8',
        name:'Bolso deportivo Speedo Duffel',
        price:'69999',
        category:'Accesorios',
        img:'../src/assets/accesorios/bolso-speedo.jpg',
        stock:'7',
        description:'Ligero, duradero y elegante, nuestro Bolso deportivo Speedo Duffel Bag es ideal para natación o para el gimnasio.'
    },
    {
        id:'9',
        name:'Tabla Speedo Elite Pullkick',
        price:'33999',
        category:'Accesorios',
        img:'../src/assets/accesorios/tabla-speedo.jpg',
        stock:'12',
        description:'Nuestro tabla de natación Speedo Pullkick Elite ha sido diseñado tanto para ser usado como kickboard o como pullbuoy. Ayuda a tener una flotabilidad óptima, mejorar la fuerza y la técnica en la práctica de la natación.'
    }
];

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
  };
  
  export const getProductsById = (productId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise(resolve => {
        setTimeout(() => {
            if (category === 'all') { // Si la categoría es 'all', devolver todos los productos
                resolve(products);
            } else {
                resolve(products.filter(prod => prod.category === category)); // Filtrar productos por categoría
            }
        }, 500);
    });
  };*/