/**
 * IMPOSTOR GAME
 * El juego de encontrar al espía
 */

// ============================================
// PALABRAS - Comunes y fáciles de describir
// ============================================

const WORDS = [
    // ========== LUGARES ==========
    'playa', 'hospital', 'colegio', 'supermercado', 'cine', 'parque', 'aeropuerto',
    'restaurante', 'biblioteca', 'gimnasio', 'museo', 'zoo', 'banco', 'farmacia',
    'hotel', 'iglesia', 'estadio', 'discoteca', 'piscina', 'montaña', 'camping',
    'gasolinera', 'peluquería', 'dentista', 'veterinario', 'comisaría', 'bomberos',
    'universidad', 'guardería', 'oficina', 'fábrica', 'mercado', 'centro comercial',
    'cafetería', 'bar', 'pub', 'teatro', 'ópera', 'circo', 'acuario', 'planetario',
    'cementerio', 'prisión', 'juzgado', 'ayuntamiento', 'embajada', 'consulado',
    'estación de tren', 'puerto', 'feria', 'parque de atracciones', 'spa', 'sauna',
    'lavandería', 'tintorería', 'floristería', 'panadería', 'carnicería', 'pescadería',
    'frutería', 'heladería', 'pizzería', 'hamburguesería', 'kebab', 'wok',
    'karaoke', 'bolera', 'casino', 'bingo', 'escape room', 'laser tag',
    'plató de televisión', 'estudio de radio', 'sala de conciertos', 'auditorio',

    // ========== COMIDA Y BEBIDA ==========
    'pizza', 'hamburguesa', 'helado', 'chocolate', 'pasta', 'ensalada', 'sushi',
    'tortilla', 'paella', 'bocadillo', 'croissant', 'tarta', 'galleta', 'churros',
    'patatas fritas', 'pollo', 'pescado', 'huevo', 'arroz', 'pan', 'queso',
    'jamón', 'manzana', 'plátano', 'naranja', 'sandía', 'fresa', 'uva',
    'lasaña', 'ravioli', 'ñoquis', 'risotto', 'croquetas', 'empanada', 'quesadilla',
    'burrito', 'taco', 'nachos', 'guacamole', 'hummus', 'falafel', 'kebab',
    'curry', 'ramen', 'dim sum', 'spring roll', 'pad thai', 'pho',
    'gazpacho', 'salmorejo', 'fabada', 'cocido', 'lentejas', 'garbanzos',
    'ceviche', 'pulpo', 'gambas', 'mejillones', 'calamares', 'sardinas', 'atún',
    'salmón', 'bacalao', 'merluza', 'lubina', 'dorada', 'trucha', 'anchoas',
    'bacon', 'salchicha', 'chorizo', 'morcilla', 'costillas', 'alitas de pollo',
    'nuggets', 'perrito caliente', 'sandwich', 'wrap', 'bagel', 'pretzel',
    'donut', 'muffin', 'brownie', 'cupcake', 'cheesecake', 'tiramisú', 'flan',
    'natillas', 'arroz con leche', 'crema catalana', 'profiteroles', 'crepe',
    'gofre', 'tortita', 'magdalena', 'bizcocho', 'turrón', 'mazapán', 'polvorón',
    'café', 'té', 'cola', 'limonada', 'naranjada', 'zumo', 'batido', 'smoothie',
    'cerveza', 'vino', 'sangría', 'mojito', 'margarita', 'piña colada',
    'leche', 'yogur', 'mantequilla', 'nata', 'mayonesa', 'ketchup', 'mostaza',
    'aceite', 'vinagre', 'sal', 'pimienta', 'azúcar', 'miel', 'mermelada',
    'cereales', 'avena', 'muesli', 'tostada', 'palmera de chocolate',
    'pera', 'melocotón', 'albaricoque', 'cereza', 'frambuesa', 'mora', 'arándano',
    'kiwi', 'mango', 'papaya', 'piña', 'coco', 'granada', 'higo', 'dátil',
    'aguacate', 'tomate', 'lechuga', 'pepino', 'zanahoria', 'cebolla', 'ajo',
    'pimiento', 'calabacín', 'berenjena', 'brócoli', 'coliflor', 'espinacas',
    'champiñón', 'seta', 'maíz', 'guisantes', 'judías verdes', 'espárragos',
    'patata', 'boniato', 'calabaza', 'remolacha', 'rábano', 'nabo', 'puerro',
    'almendra', 'nuez', 'avellana', 'cacahuete', 'pistacho', 'anacardo',
    'palomitas', 'chicle', 'caramelo', 'piruleta', 'regaliz', 'gominola',

    // ========== ANIMALES ==========
    'perro', 'gato', 'león', 'elefante', 'jirafa', 'mono', 'delfín', 'tiburón',
    'águila', 'pingüino', 'oso', 'lobo', 'zorro', 'conejo', 'tortuga', 'serpiente',
    'caballo', 'vaca', 'cerdo', 'gallina', 'pato', 'oveja', 'ratón', 'araña',
    'tigre', 'leopardo', 'guepardo', 'pantera', 'jaguar', 'puma', 'lince',
    'rinoceronte', 'hipopótamo', 'cebra', 'gorila', 'chimpancé', 'orangután',
    'koala', 'canguro', 'ornitorrinco', 'oso panda', 'oso polar', 'foca', 'morsa',
    'ballena', 'orca', 'pulpo', 'calamar', 'medusa', 'estrella de mar', 'caballito de mar',
    'cangrejo', 'langosta', 'gamba', 'mejillón', 'ostra', 'almeja', 'caracol',
    'cocodrilo', 'caimán', 'lagarto', 'iguana', 'camaleón', 'gecko', 'salamandra',
    'rana', 'sapo', 'renacuajo', 'tritón', 'axolotl',
    'loro', 'periquito', 'canario', 'búho', 'lechuza', 'halcón', 'cuervo',
    'paloma', 'gaviota', 'pelícano', 'flamenco', 'cigüeña', 'grulla', 'pavo real',
    'avestruz', 'kiwi', 'tucán', 'colibrí', 'golondrina', 'gorrión', 'mirlo',
    'abeja', 'avispa', 'mosca', 'mosquito', 'mariposa', 'polilla', 'libélula',
    'hormiga', 'escarabajo', 'mariquita', 'saltamontes', 'grillo', 'cucaracha',
    'escorpión', 'ciempiés', 'lombriz', 'oruga', 'gusano', 'sanguijuela',
    'murciélago', 'topo', 'erizo', 'ardilla', 'castor', 'nutria', 'mapache',
    'tejón', 'mofeta', 'comadreja', 'hurón', 'visón', 'chinchilla', 'hámster',
    'cobaya', 'jerbo', 'rata', 'ciervo', 'alce', 'reno', 'corzo', 'jabalí',
    'bisonte', 'búfalo', 'yak', 'camello', 'dromedario', 'llama', 'alpaca',
    'burro', 'mula', 'poni', 'unicornio', 'dragón', 'dinosaurio',

    // ========== OBJETOS COTIDIANOS ==========
    'teléfono', 'televisión', 'ordenador', 'coche', 'bicicleta', 'avión', 'barco',
    'reloj', 'gafas', 'paraguas', 'mochila', 'cartera', 'llave', 'cama', 'silla',
    'mesa', 'lámpara', 'espejo', 'nevera', 'lavadora', 'microondas', 'sofá',
    'almohada', 'toalla', 'cepillo de dientes', 'tijeras', 'libro', 'periódico',
    'bolígrafo', 'lápiz', 'goma de borrar', 'sacapuntas', 'regla', 'compás',
    'cuaderno', 'carpeta', 'archivador', 'clip', 'grapa', 'celo', 'pegamento',
    'calendario', 'agenda', 'diccionario', 'enciclopedia', 'atlas', 'globo terráqueo',
    'pizarra', 'tiza', 'rotulador', 'subrayador', 'corrector', 'post-it',
    'sobre', 'sello', 'tarjeta', 'foto', 'álbum', 'marco de fotos', 'póster',
    'vela', 'cerilla', 'mechero', 'linterna', 'pila', 'enchufe', 'cable',
    'bombilla', 'interruptor', 'timbre', 'cerradura', 'candado', 'caja fuerte',
    'maleta', 'bolsa', 'saco', 'cesta', 'cubo', 'papelera', 'contenedor',
    'escoba', 'fregona', 'recogedor', 'plumero', 'trapo', 'esponja', 'bayeta',
    'jabón', 'champú', 'gel', 'crema', 'perfume', 'desodorante', 'colonia',
    'cuchillo', 'tenedor', 'cuchara', 'plato', 'vaso', 'taza', 'copa', 'jarra',
    'sartén', 'olla', 'cacerola', 'bandeja', 'fuente', 'ensaladera', 'sopera',
    'abrelatas', 'sacacorchos', 'exprimidor', 'colador', 'rallador', 'pelador',
    'tabla de cortar', 'rodillo', 'molde', 'espátula', 'cucharón', 'pinzas',
    'termómetro', 'báscula', 'temporizador', 'delantal', 'guantes de cocina',
    'servilleta', 'mantel', 'salvamanteles', 'posavasos', 'salero', 'pimentero',
    'aceitera', 'vinagrera', 'azucarero', 'cafetera', 'tetera', 'termo',
    'fiambrera', 'táper', 'papel de aluminio', 'film transparente', 'bolsa zip',

    // ========== DEPORTES Y OCIO ==========
    'fútbol', 'baloncesto', 'tenis', 'natación', 'ciclismo', 'golf', 'boxeo',
    'esquí', 'surf', 'yoga', 'baile', 'guitarra', 'piano', 'videojuego',
    'película', 'concierto', 'fiesta', 'cumpleaños', 'boda', 'navidad',
    'voleibol', 'balonmano', 'rugby', 'béisbol', 'hockey', 'cricket', 'polo',
    'atletismo', 'maratón', 'triatlón', 'pentatlón', 'decatlón', 'cross',
    'gimnasia', 'acrobacia', 'parkour', 'escalada', 'rappel', 'espeleología',
    'paracaidismo', 'puenting', 'ala delta', 'parapente', 'globo aerostático',
    'buceo', 'snorkel', 'windsurf', 'kitesurf', 'wakeboard', 'esquí acuático',
    'kayak', 'canoa', 'piragüismo', 'remo', 'vela', 'pesca', 'caza',
    'snowboard', 'trineo', 'patinaje sobre hielo', 'curling', 'bobsled',
    'patinaje', 'monopatín', 'patinete', 'BMX', 'motocross', 'karting',
    'ajedrez', 'damas', 'dominó', 'parchís', 'monopoly', 'scrabble', 'trivial',
    'póker', 'blackjack', 'ruleta', 'bingo', 'lotería', 'quiniela',
    'billar', 'dardos', 'futbolín', 'ping pong', 'air hockey', 'pinball',
    'karate', 'judo', 'taekwondo', 'kung fu', 'aikido', 'kendo', 'sumo',
    'esgrima', 'tiro con arco', 'tiro olímpico', 'lanzamiento de peso', 'jabalina',
    'salto de altura', 'salto de longitud', 'pértiga', 'vallas', 'relevos',
    'halterofilia', 'crossfit', 'spinning', 'pilates', 'zumba', 'aerobic',
    'senderismo', 'trekking', 'orientación', 'geocaching', 'paintball', 'airsoft',

    // ========== PROFESIONES ==========
    'médico', 'profesor', 'policía', 'bombero', 'cocinero', 'piloto', 'astronauta',
    'actor', 'cantante', 'futbolista', 'científico', 'abogado', 'arquitecto',
    'electricista', 'fontanero', 'jardinero', 'cartero', 'conductor', 'camarero',
    'enfermero', 'cirujano', 'dentista', 'veterinario', 'farmacéutico', 'psicólogo',
    'fisioterapeuta', 'nutricionista', 'óptico', 'podólogo', 'logopeda', 'paramédico',
    'juez', 'fiscal', 'notario', 'detective', 'guardia de seguridad', 'espía',
    'soldado', 'general', 'almirante', 'capitán', 'marinero', 'buzo',
    'ingeniero', 'programador', 'diseñador', 'fotógrafo', 'periodista', 'escritor',
    'editor', 'traductor', 'intérprete', 'locutor', 'presentador', 'director de cine',
    'productor', 'guionista', 'cámara', 'técnico de sonido', 'maquillador', 'estilista',
    'modelo', 'bailarín', 'coreógrafo', 'músico', 'compositor', 'DJ',
    'pintor', 'escultor', 'ceramista', 'joyero', 'relojero', 'sastre', 'modista',
    'panadero', 'pastelero', 'carnicero', 'pescadero', 'frutero', 'florista',
    'mecánico', 'chapista', 'cerrajero', 'cristalero', 'pintor de brocha gorda',
    'albañil', 'carpintero', 'herrero', 'soldador', 'grúa', 'excavadora',
    'agricultor', 'ganadero', 'pescador', 'leñador', 'minero', 'apicultor',
    'piloto de avión', 'azafata', 'controlador aéreo', 'maquinista', 'taxista',
    'camionero', 'repartidor', 'mensajero', 'recepcionista', 'secretario', 'contable',
    'economista', 'banquero', 'corredor de bolsa', 'agente inmobiliario', 'asesor',
    'político', 'diplomático', 'alcalde', 'presidente', 'rey', 'papa',
    'cura', 'monja', 'rabino', 'imán', 'monje', 'misionero',
    'arqueólogo', 'historiador', 'geólogo', 'biólogo', 'químico', 'físico',
    'matemático', 'astrónomo', 'meteorólogo', 'oceanógrafo', 'vulcanólogo',
    'mago', 'payaso', 'acróbata', 'domador', 'equilibrista', 'malabarista',
    'árbitro', 'entrenador', 'preparador físico', 'comentarista deportivo',
    'youtuber', 'influencer', 'streamer', 'gamer profesional', 'community manager',

    // ========== ROPA Y ACCESORIOS ==========
    'camiseta', 'pantalón', 'vestido', 'zapatos', 'zapatillas', 'calcetines',
    'chaqueta', 'abrigo', 'bufanda', 'gorro', 'guantes', 'cinturón', 'corbata',
    'pijama', 'bañador', 'bikini', 'gorra', 'sombrero', 'bolso', 'mochila',
    'camisa', 'polo', 'jersey', 'sudadera', 'chaleco', 'blazer', 'traje',
    'esmoquin', 'uniforme', 'bata', 'delantal', 'mono de trabajo', 'overol',
    'vaqueros', 'pantalón corto', 'bermudas', 'leggins', 'mallas', 'falda',
    'minifalda', 'maxifalda', 'tutú', 'capa', 'poncho', 'kimono', 'toga',
    'botas', 'sandalias', 'chanclas', 'mocasines', 'tacones', 'bailarinas',
    'deportivas', 'botines', 'zuecos', 'alpargatas', 'náuticos', 'slippers',
    'ropa interior', 'sujetador', 'calzoncillos', 'bragas', 'camisón', 'batín',
    'anillo', 'pulsera', 'collar', 'pendientes', 'reloj', 'broche', 'alfiler',
    'diadema', 'horquilla', 'coletero', 'pinza de pelo', 'pañuelo', 'fular',
    'gafas de sol', 'lentillas', 'monóculo', 'prismáticos', 'lupa',
    'paraguas', 'abanico', 'bastón', 'muleta', 'andador', 'silla de ruedas',
    'casco', 'máscara', 'antifaz', 'corona', 'tiara', 'peluca', 'postizo',

    // ========== NATURALEZA ==========
    'sol', 'luna', 'estrella', 'nube', 'lluvia', 'nieve', 'arcoíris', 'volcán',
    'río', 'lago', 'mar', 'océano', 'bosque', 'selva', 'desierto', 'isla',
    'flor', 'árbol', 'hierba', 'hoja', 'piedra', 'arena', 'fuego', 'agua',
    'montaña', 'valle', 'colina', 'llanura', 'meseta', 'cañón', 'barranco',
    'cascada', 'manantial', 'pantano', 'ciénaga', 'oasis', 'glaciar', 'iceberg',
    'cueva', 'gruta', 'acantilado', 'arrecife', 'coral', 'ola', 'marea',
    'tormenta', 'trueno', 'relámpago', 'rayo', 'granizo', 'escarcha', 'rocío',
    'niebla', 'bruma', 'neblina', 'tornado', 'huracán', 'tifón', 'terremoto',
    'tsunami', 'erupción', 'lava', 'ceniza', 'géiser', 'aurora boreal',
    'eclipse', 'cometa', 'asteroide', 'meteorito', 'planeta', 'galaxia', 'nebulosa',
    'rosa', 'tulipán', 'girasol', 'margarita', 'orquídea', 'lirio', 'clavel',
    'amapola', 'violeta', 'jazmín', 'lavanda', 'romero', 'tomillo', 'albahaca',
    'menta', 'perejil', 'cilantro', 'orégano', 'laurel', 'salvia', 'hinojo',
    'roble', 'pino', 'abeto', 'sauce', 'olivo', 'palmera', 'bambú', 'cactus',
    'helecho', 'musgo', 'liquen', 'alga', 'nenúfar', 'trébol', 'hiedra',
    'tierra', 'barro', 'arcilla', 'grava', 'roca', 'mármol', 'granito', 'pizarra',
    'oro', 'plata', 'cobre', 'hierro', 'diamante', 'rubí', 'esmeralda', 'zafiro',
    'perla', 'ámbar', 'cristal', 'cuarzo', 'carbón', 'petróleo', 'gas natural',

    // ========== CUERPO HUMANO ==========
    'cabeza', 'mano', 'pie', 'ojo', 'nariz', 'boca', 'oreja', 'pelo',
    'brazo', 'pierna', 'dedo', 'corazón', 'cerebro', 'hueso', 'músculo',
    'cara', 'frente', 'ceja', 'pestaña', 'párpado', 'mejilla', 'barbilla', 'mentón',
    'labio', 'lengua', 'diente', 'muela', 'encía', 'paladar', 'garganta',
    'cuello', 'nuca', 'hombro', 'codo', 'muñeca', 'palma', 'uña', 'nudillo',
    'pecho', 'espalda', 'cintura', 'cadera', 'ombligo', 'costilla', 'columna',
    'muslo', 'rodilla', 'espinilla', 'tobillo', 'talón', 'planta del pie',
    'pulmón', 'hígado', 'riñón', 'estómago', 'intestino', 'páncreas', 'bazo',
    'vena', 'arteria', 'sangre', 'piel', 'sudor', 'lágrima', 'saliva',

    // ========== TRANSPORTE ==========
    'coche', 'moto', 'autobús', 'tren', 'metro', 'taxi', 'ambulancia',
    'camión', 'tractor', 'helicóptero', 'cohete', 'patinete', 'monopatín',
    'furgoneta', 'caravana', 'autocaravana', 'limusina', 'descapotable', 'todoterreno',
    'deportivo', 'utilitario', 'familiar', 'monovolumen', 'pickup', 'jeep',
    'quad', 'triciclo', 'bicicleta eléctrica', 'segway', 'hoverboard',
    'tranvía', 'trolebús', 'funicular', 'teleférico', 'telesilla', 'telecabina',
    'avión', 'avioneta', 'jet privado', 'hidroavión', 'planeador', 'dirigible',
    'globo', 'dron', 'satélite', 'nave espacial', 'estación espacial', 'transbordador',
    'barco', 'yate', 'velero', 'lancha', 'bote', 'canoa', 'kayak', 'góndola',
    'ferry', 'crucero', 'transatlántico', 'petrolero', 'portaaviones', 'submarino',
    'moto de agua', 'tabla de surf', 'windsurf', 'catamarán', 'balsa', 'boya',
    'carro', 'carreta', 'trineo', 'trineo de perros', 'rickshaw', 'tuk tuk',
    'caballo', 'burro', 'camello', 'elefante', 'bicicleta tándem', 'triciclo de carga',

    // ========== TECNOLOGÍA ==========
    'móvil', 'tablet', 'portátil', 'auriculares', 'altavoz', 'cámara',
    'batidora', 'tostadora', 'cafetera', 'aspiradora', 'ventilador', 'aire acondicionado',
    'smartphone', 'smartwatch', 'bluetooth', 'wifi', 'GPS', 'USB', 'HDMI',
    'ordenador de escritorio', 'servidor', 'router', 'módem', 'disco duro', 'pendrive',
    'ratón', 'teclado', 'pantalla', 'monitor', 'impresora', 'escáner', 'webcam',
    'micrófono', 'cascos', 'gamepad', 'joystick', 'consola', 'realidad virtual',
    'robot', 'inteligencia artificial', 'algoritmo', 'app', 'software', 'hardware',
    'código QR', 'chip', 'procesador', 'memoria RAM', 'tarjeta gráfica', 'placa base',
    'proyector', 'cine en casa', 'home cinema', 'barra de sonido', 'subwoofer',
    'televisión inteligente', 'streaming', 'netflix', 'spotify', 'podcast', 'ebook',
    'kindle', 'lector de libros', 'GPS', 'dashcam', 'GoPro', 'gimbal', 'trípode',
    'ring light', 'green screen', 'drone', 'cargador', 'powerbank', 'cable USB',
    'horno', 'vitrocerámica', 'inducción', 'freidora de aire', 'thermomix', 'robot de cocina',
    'lavavajillas', 'secadora', 'plancha', 'vaporeta', 'robot aspirador', 'roomba',
    'calefacción', 'radiador', 'estufa', 'chimenea', 'calentador', 'termo eléctrico',

    // ========== MUEBLES Y HOGAR ==========
    'armario', 'estantería', 'escritorio', 'mesita', 'cómoda', 'perchero',
    'sofá', 'sillón', 'mecedora', 'puf', 'taburete', 'banco', 'hamaca',
    'cama', 'litera', 'cuna', 'moisés', 'colchón', 'somier', 'cabecero',
    'sábana', 'edredón', 'manta', 'almohada', 'cojín', 'funda nórdica',
    'cortina', 'estor', 'persiana', 'toldo', 'mosquitera', 'biombo',
    'alfombra', 'moqueta', 'felpudo', 'tapiz', 'cuadro', 'fotografía',
    'espejo', 'reloj de pared', 'calendario', 'termómetro', 'barómetro',
    'florero', 'maceta', 'jarrón', 'figura', 'escultura', 'trofeo',
    'lámpara de pie', 'lámpara de mesa', 'aplique', 'foco', 'guirnalda',
    'puerta', 'ventana', 'balcón', 'terraza', 'jardín', 'patio', 'garaje',
    'escalera', 'ascensor', 'barandilla', 'pasamanos', 'fachada', 'tejado',
    'bañera', 'ducha', 'lavabo', 'inodoro', 'bidé', 'grifo', 'toallero',
    'espejo de baño', 'armario de baño', 'estante de ducha', 'alfombrilla',

    // ========== JUGUETES Y ENTRETENIMIENTO ==========
    'pelota', 'muñeca', 'puzzle', 'dado', 'carta', 'globo', 'cometa',
    'peluche', 'osito de peluche', 'action figure', 'figura de acción', 'superhéroe',
    'lego', 'playmobil', 'barbie', 'hot wheels', 'scalextric', 'tren eléctrico',
    'pista de carreras', 'circuito', 'coche teledirigido', 'helicóptero RC', 'drone',
    'pistola de agua', 'pistola nerf', 'tirachinas', 'arco y flechas', 'espada',
    'castillo', 'casa de muñecas', 'cocina de juguete', 'supermercado de juguete',
    'disfraz', 'máscara', 'varita mágica', 'capa de superhéroe', 'corona',
    'peonza', 'yoyó', 'canicas', 'trompo', 'diábolo', 'frisbee', 'boomerang',
    'columpio', 'tobogán', 'balancín', 'cama elástica', 'piscina de bolas',
    'triciclo', 'bicicleta con ruedines', 'patines', 'monopatín', 'hula hoop',
    'cuerda de saltar', 'goma de saltar', 'rayuela', 'pilla pilla', 'escondite',
    'plastilina', 'arcilla', 'pintura de dedos', 'acuarelas', 'ceras', 'rotuladores',
    'libro para colorear', 'pegatinas', 'calcomanías', 'tatuajes temporales',
    'slime', 'masa mágica', 'arena cinética', 'kit de ciencia', 'microscopio',
    'telescopio', 'prismáticos', 'walkie talkie', 'karaoke', 'micrófono de juguete',

    // ========== INSTRUMENTOS MUSICALES ==========
    'tambor', 'flauta', 'violín', 'trompeta', 'batería', 'saxofón',
    'guitarra', 'guitarra eléctrica', 'bajo', 'ukelele', 'banjo', 'mandolina',
    'piano', 'teclado', 'órgano', 'acordeón', 'armónica', 'melódica',
    'violonchelo', 'contrabajo', 'viola', 'arpa', 'laúd', 'cítara',
    'clarinete', 'oboe', 'fagot', 'flauta travesera', 'piccolo', 'ocarina',
    'trombón', 'tuba', 'corneta', 'trompa', 'bombardino', 'fliscorno',
    'xilófono', 'marimba', 'vibráfono', 'glockenspiel', 'campana', 'triángulo',
    'pandereta', 'castañuelas', 'maracas', 'güiro', 'conga', 'bongó',
    'djembé', 'cajón flamenco', 'timbal', 'platillos', 'gong', 'cencerro',
    'gaita', 'didgeridoo', 'sitar', 'koto', 'erhu', 'balalaika',
    'sintetizador', 'sampler', 'caja de ritmos', 'mesa de mezclas', 'tocadiscos',

    // ========== EDIFICIOS Y CONSTRUCCIONES ==========
    'casa', 'edificio', 'castillo', 'pirámide', 'torre', 'puente', 'faro',
    'rascacielos', 'mansión', 'palacio', 'villa', 'chalet', 'bungalow', 'cabaña',
    'iglú', 'tienda de campaña', 'yurta', 'tipi', 'caravana', 'casa flotante',
    'catedral', 'basílica', 'capilla', 'mezquita', 'sinagoga', 'templo', 'pagoda',
    'monasterio', 'convento', 'abadía', 'ermita', 'santuario', 'mausoleo',
    'fortaleza', 'muralla', 'torre del homenaje', 'foso', 'puente levadizo',
    'acueducto', 'coliseo', 'anfiteatro', 'arco del triunfo', 'obelisco', 'estatua',
    'molino', 'granja', 'establo', 'granero', 'silo', 'invernadero', 'bodega',
    'presa', 'embalse', 'central eléctrica', 'central nuclear', 'refinería',
    'antena', 'torre de comunicaciones', 'observatorio', 'planetario', 'radar',
    'bunker', 'trinchera', 'base militar', 'cuartel', 'arsenal', 'polvorín',
    'túnel', 'metro', 'alcantarilla', 'parking subterráneo', 'sótano', 'bodega',

    // ========== CONCEPTOS Y ABSTRACTOS ==========
    'amor', 'odio', 'miedo', 'alegría', 'tristeza', 'sorpresa', 'asco',
    'paz', 'guerra', 'libertad', 'justicia', 'verdad', 'mentira', 'secreto',
    'sueño', 'pesadilla', 'recuerdo', 'olvido', 'esperanza', 'desesperación',
    'tiempo', 'espacio', 'infinito', 'eternidad', 'momento', 'instante',
    'vida', 'muerte', 'nacimiento', 'vejez', 'juventud', 'niñez', 'adolescencia',
    'amistad', 'enemistad', 'confianza', 'traición', 'lealtad', 'venganza',
    'éxito', 'fracaso', 'victoria', 'derrota', 'empate', 'competición',
    'dinero', 'pobreza', 'riqueza', 'fortuna', 'suerte', 'destino', 'karma',
    'magia', 'hechizo', 'maldición', 'bendición', 'milagro', 'misterio',
    'ciencia', 'arte', 'música', 'literatura', 'filosofía', 'religión',
    'democracia', 'dictadura', 'monarquía', 'república', 'revolución', 'golpe de estado',

    // ========== EVENTOS Y CELEBRACIONES ==========
    'cumpleaños', 'boda', 'bautizo', 'comunión', 'graduación', 'jubilación',
    'navidad', 'nochebuena', 'nochevieja', 'año nuevo', 'reyes magos', 'epifanía',
    'carnaval', 'cuaresma', 'semana santa', 'pascua', 'pentecostés',
    'halloween', 'día de muertos', 'todos los santos', 'san valentín',
    'día de la madre', 'día del padre', 'día del niño', 'día del trabajo',
    'fiesta nacional', 'independencia', 'constitución', 'elecciones', 'referéndum',
    'mundial de fútbol', 'olimpiadas', 'eurocopa', 'superbowl', 'final de champions',
    'festival de música', 'concierto', 'ópera', 'ballet', 'teatro', 'circo',
    'feria', 'romería', 'procesión', 'cabalgata', 'desfile', 'manifestación',
    'aniversario', 'luna de miel', 'despedida de soltero', 'baby shower',
    'funeral', 'entierro', 'cremación', 'velatorio', 'memorial',

    // ========== PELÍCULAS Y SERIES (TEMAS) ==========
    'superhéroe', 'villano', 'zombi', 'vampiro', 'hombre lobo', 'momia', 'fantasma',
    'alienígena', 'extraterrestre', 'ovni', 'platillo volante', 'invasión',
    'robot', 'androide', 'cyborg', 'inteligencia artificial', 'matrix',
    'viaje en el tiempo', 'universo paralelo', 'teletransporte', 'invisibilidad',
    'superhéroe', 'capa', 'antifaz', 'superpoder', 'kryptonita', 'batcueva',
    'espada láser', 'la fuerza', 'jedi', 'sith', 'nave espacial', 'estrella de la muerte',
    'anillo único', 'hobbit', 'elfo', 'enano', 'orco', 'mago', 'dragón',
    'varita mágica', 'hechizo', 'poción', 'escoba voladora', 'quidditch',
    'pirata', 'tesoro', 'mapa del tesoro', 'isla desierta', 'barco pirata',
    'espía', 'agente secreto', 'misión imposible', 'gadget', 'coche espía',
    'detective', 'lupa', 'pista', 'sospechoso', 'crimen', 'asesinato', 'coartada',
    'western', 'vaquero', 'indio', 'sherif', 'pistola', 'caballo', 'saloon',
    'samurái', 'ninja', 'katana', 'shuriken', 'dojo', 'sensei', 'kung fu',
    'gladiador', 'coliseo', 'emperador', 'esclavo', 'legión romana', 'centurión'
];

// ============================================
// SISTEMA DE AUDIO
// ============================================

let audioContext = null;
let isMuted = false;
let menuMusic = null;      // misterio.mp3 - menú, config y cartas
let gameMusic = null;      // misterio2.mp3 - solo durante timer

function initAudio() {
    // Crear AudioContext
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // Parar música anterior si existe
    if (menuMusic) {
        menuMusic.pause();
    }
    if (gameMusic) {
        gameMusic.pause();
    }

    // Crear audios nuevos
    menuMusic = new Audio('misterio.mp3');
    menuMusic.loop = true;
    menuMusic.volume = 0.5;

    gameMusic = new Audio('misterio2.mp3');
    gameMusic.loop = true;
    gameMusic.volume = 0.5;

    // Iniciar música del menú
    if (!isMuted) {
        menuMusic.play().catch(() => {});
    }
}

// Tick urgente (últimos 20 segundos) - más suave
function playUrgentTick() {
    if (isMuted || !audioContext) return;

    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.frequency.setValueAtTime(880, audioContext.currentTime);
    osc.type = 'sine';

    gain.gain.setValueAtTime(0.08, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.06);

    osc.start();
    osc.stop(audioContext.currentTime + 0.06);
}

// Alarma de tiempo terminado
function playAlarm() {
    if (isMuted || !audioContext) return;

    const frequencies = [523, 659, 784, 1047]; // Do-Mi-Sol-Do

    frequencies.forEach((freq, i) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.frequency.setValueAtTime(freq, audioContext.currentTime + i * 0.15);
        osc.type = 'sine';

        gain.gain.setValueAtTime(0.3, audioContext.currentTime + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.15 + 0.3);

        osc.start(audioContext.currentTime + i * 0.15);
        osc.stop(audioContext.currentTime + i * 0.15 + 0.3);
    });
}

// Cambiar a música de juego (timer) - misterio2.mp3
function startGameMusic() {
    if (isMuted) return;

    if (menuMusic) {
        menuMusic.pause();
    }

    if (gameMusic) {
        gameMusic.currentTime = 0;
        gameMusic.play().catch(() => {});
    }
}

// Cambiar a música de menú - misterio.mp3
function startMenuMusic() {
    if (isMuted) return;

    if (gameMusic) {
        gameMusic.pause();
    }

    if (menuMusic) {
        menuMusic.play().catch(() => {});
    }
}

// Parar toda la música
function stopAllMusic() {
    if (menuMusic) {
        menuMusic.pause();
    }
    if (gameMusic) {
        gameMusic.pause();
    }
}

// Toggle mute
function toggleMute() {
    isMuted = !isMuted;

    const muteBtn = document.getElementById('btnMute');
    const soundOn = document.getElementById('soundOnIcon');
    const soundOff = document.getElementById('soundOffIcon');

    if (isMuted) {
        muteBtn.classList.add('muted');
        soundOn.style.display = 'none';
        soundOff.style.display = 'block';
        stopAllMusic();
    } else {
        muteBtn.classList.remove('muted');
        soundOn.style.display = 'block';
        soundOff.style.display = 'none';
        // Reanudar música según estado
        if (gameState.timerRunning) {
            startGameMusic();
        } else {
            startMenuMusic();
        }
    }
}

// ============================================
// ESTADO DEL JUEGO
// ============================================

let gameState = {
    players: 4,
    impostors: 1,
    time: 3,
    mode: 'classic', // 'classic' o 'chaos'
    currentPlayer: 1,
    word: '',
    impostorPlayers: [],
    cardRevealed: false,
    timerRunning: false,
    timerPaused: false,
    timeRemaining: 0,
    timerInterval: null
};

// ============================================
// ELEMENTOS DOM
// ============================================

const screens = {
    home: document.getElementById('screenHome'),
    config: document.getElementById('screenConfig'),
    reveal: document.getElementById('screenReveal'),
    game: document.getElementById('screenGame'),
    result: document.getElementById('screenResult')
};

const elements = {
    // Config
    playersValue: document.getElementById('playersValue'),
    impostorsValue: document.getElementById('impostorsValue'),
    timeValue: document.getElementById('timeValue'),
    summaryPlayers: document.getElementById('summaryPlayers'),
    summaryImpostors: document.getElementById('summaryImpostors'),
    summaryImpostorLabel: document.getElementById('summaryImpostorLabel'),
    summaryTime: document.getElementById('summaryTime'),
    impostorsConfig: document.getElementById('impostorsConfig'),
    btnModeClassic: document.getElementById('btnModeClassic'),
    btnModeChaos: document.getElementById('btnModeChaos'),

    // Reveal
    currentPlayer: document.getElementById('currentPlayer'),
    currentProgress: document.getElementById('currentProgress'),
    totalPlayers: document.getElementById('totalPlayers'),
    card: document.getElementById('card'),
    cardInner: document.getElementById('cardInner'),
    cardBack: document.getElementById('cardBack'),
    cardRole: document.getElementById('cardRole'),
    btnNextPlayer: document.getElementById('btnNextPlayer'),
    btnNextText: document.getElementById('btnNextText'),

    // Game
    timerValue: document.getElementById('timerValue'),
    timerProgress: document.getElementById('timerProgress'),
    gamePlayersInfo: document.getElementById('gamePlayersInfo'),
    gameImpostorsInfo: document.getElementById('gameImpostorsInfo'),
    gameImpostorsCard: document.getElementById('gameImpostorsCard'),
    gameImpostorsLabel: document.getElementById('gameImpostorsLabel'),
    pauseIcon: document.getElementById('pauseIcon'),
    playIcon: document.getElementById('playIcon'),
    pauseText: document.getElementById('pauseText'),

    // Result
    revealWord: document.getElementById('revealWord'),
    impostorsList: document.getElementById('impostorsList'),

    // Modal
    modalRules: document.getElementById('modalRules')
};

// ============================================
// NAVEGACIÓN
// ============================================

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// ============================================
// CONFIGURACIÓN
// ============================================

function updateConfig() {
    elements.playersValue.textContent = gameState.players;
    elements.impostorsValue.textContent = gameState.impostors;
    elements.timeValue.textContent = gameState.time;
    elements.summaryPlayers.textContent = gameState.players;
    elements.summaryTime.textContent = gameState.time;

    // Actualizar según el modo
    if (gameState.mode === 'chaos') {
        elements.impostorsConfig.style.display = 'none';
        elements.summaryImpostors.textContent = '?';
        elements.summaryImpostorLabel.textContent = 'impostores';
    } else {
        elements.impostorsConfig.style.display = 'flex';
        elements.summaryImpostors.textContent = gameState.impostors;
        elements.summaryImpostorLabel.textContent = gameState.impostors === 1 ? 'impostor' : 'impostores';
    }
}

function setMode(mode) {
    gameState.mode = mode;

    // Actualizar UI de botones de modo
    elements.btnModeClassic.classList.toggle('active', mode === 'classic');
    elements.btnModeChaos.classList.toggle('active', mode === 'chaos');

    updateConfig();
}

function adjustPlayers(delta) {
    const newValue = gameState.players + delta;
    if (newValue >= 3 && newValue <= 15) {
        gameState.players = newValue;
        // Ajustar impostores si hay más impostores que jugadores - 1
        if (gameState.impostors >= gameState.players) {
            gameState.impostors = gameState.players - 1;
        }
        updateConfig();
    }
}

function adjustImpostors(delta) {
    const newValue = gameState.impostors + delta;
    if (newValue >= 1 && newValue <= gameState.players) {
        gameState.impostors = newValue;
        updateConfig();
    }
}

function adjustTime(delta) {
    const newValue = gameState.time + delta;
    if (newValue >= 1 && newValue <= 10) {
        gameState.time = newValue;
        updateConfig();
    }
}

// ============================================
// LÓGICA DEL JUEGO
// ============================================

function startGame() {
    // misterio.mp3 sigue sonando durante las cartas

    // Seleccionar palabra aleatoria
    gameState.word = WORDS[Math.floor(Math.random() * WORDS.length)];

    // En modo caos, elegir número aleatorio de impostores (1 a players-1, o incluso todos!)
    let numImpostors = gameState.impostors;
    if (gameState.mode === 'chaos') {
        // Puede ser desde 0 hasta todos los jugadores
        // Pero para que sea divertido, mínimo 1 y máximo jugadores
        numImpostors = Math.floor(Math.random() * gameState.players) + 1;
    }

    // Seleccionar impostores aleatoriamente
    const playerNumbers = Array.from({length: gameState.players}, (_, i) => i + 1);
    gameState.impostorPlayers = [];

    for (let i = 0; i < numImpostors; i++) {
        const randomIndex = Math.floor(Math.random() * playerNumbers.length);
        gameState.impostorPlayers.push(playerNumbers[randomIndex]);
        playerNumbers.splice(randomIndex, 1);
    }

    // Resetear estado
    gameState.currentPlayer = 1;
    gameState.cardRevealed = false;

    // Actualizar UI
    elements.totalPlayers.textContent = gameState.players;
    updateRevealScreen();
    showScreen('reveal');
}

function updateRevealScreen() {
    elements.currentPlayer.textContent = gameState.currentPlayer;
    elements.currentProgress.textContent = gameState.currentPlayer;

    // Resetear carta
    elements.cardInner.classList.remove('flipped');
    elements.card.classList.remove('revealed');
    elements.card.classList.remove('seen');
    elements.cardInner.style.transform = 'rotateY(0deg)';
    elements.cardInner.style.transition = 'none';
    gameState.cardRevealed = false;

    // Actualizar botón
    elements.btnNextPlayer.disabled = true;
    if (gameState.currentPlayer === gameState.players) {
        elements.btnNextText.textContent = '¡Jugar!';
    } else {
        elements.btnNextText.textContent = 'Siguiente Jugador';
    }

    // Configurar contenido de la carta
    const isImpostor = gameState.impostorPlayers.includes(gameState.currentPlayer);

    if (isImpostor) {
        elements.cardRole.innerHTML = `
            <span class="role-icon">🕵️</span>
            <p class="role-label">Eres el</p>
            <p class="role-word impostor">IMPOSTOR</p>
        `;
    } else {
        elements.cardRole.innerHTML = `
            <p class="role-label">La palabra es</p>
            <p class="role-word">${gameState.word.toUpperCase()}</p>
        `;
    }
}

function nextPlayer() {
    if (gameState.currentPlayer < gameState.players) {
        gameState.currentPlayer++;
        updateRevealScreen();
    } else {
        // Todos los jugadores han visto su carta, iniciar timer
        startTimer();
    }
}

// ============================================
// TIMER
// ============================================

function startTimer() {
    gameState.timeRemaining = gameState.time * 60;
    gameState.timerRunning = true;
    gameState.timerPaused = false;

    // Cambiar a música de juego (misterio2.mp3)
    startGameMusic();

    // Actualizar info del juego
    elements.gamePlayersInfo.textContent = gameState.players;

    // En modo caos, ocultar el número de impostores
    if (gameState.mode === 'chaos') {
        elements.gameImpostorsInfo.textContent = '?';
        elements.gameImpostorsLabel.textContent = 'Impostores';
    } else {
        elements.gameImpostorsInfo.textContent = gameState.impostors;
        elements.gameImpostorsLabel.textContent = gameState.impostors === 1 ? 'Impostor' : 'Impostores';
    }

    updateTimerDisplay();
    showScreen('game');

    gameState.timerInterval = setInterval(() => {
        if (!gameState.timerPaused) {
            gameState.timeRemaining--;
            updateTimerDisplay();

            // Solo tick en los últimos 20 segundos
            if (gameState.timeRemaining <= 20 && gameState.timeRemaining > 0) {
                playUrgentTick();
            }

            if (gameState.timeRemaining <= 0) {
                endTimer();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeRemaining / 60);
    const seconds = gameState.timeRemaining % 60;
    elements.timerValue.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Actualizar círculo de progreso
    const totalSeconds = gameState.time * 60;
    const progress = gameState.timeRemaining / totalSeconds;
    const circumference = 2 * Math.PI * 45; // radio = 45
    const offset = circumference * (1 - progress);
    elements.timerProgress.style.strokeDashoffset = offset;

    // Cambiar color cuando queda poco tiempo
    if (gameState.timeRemaining <= 30) {
        elements.timerProgress.style.stroke = '#e74c3c';
    } else if (gameState.timeRemaining <= 60) {
        elements.timerProgress.style.stroke = '#fdcb6e';
    } else {
        elements.timerProgress.style.stroke = '#6c5ce7';
    }
}

function togglePause() {
    gameState.timerPaused = !gameState.timerPaused;

    if (gameState.timerPaused) {
        elements.pauseIcon.style.display = 'none';
        elements.playIcon.style.display = 'block';
        elements.pauseText.textContent = 'Continuar';
    } else {
        elements.pauseIcon.style.display = 'block';
        elements.playIcon.style.display = 'none';
        elements.pauseText.textContent = 'Pausar';
    }
}

function endTimer() {
    clearInterval(gameState.timerInterval);
    gameState.timerRunning = false;
    stopAllMusic();
    playAlarm();
    showResult();
}

function endGame() {
    clearInterval(gameState.timerInterval);
    gameState.timerRunning = false;
    stopAllMusic();
    showResult();
}

function showResult() {
    elements.revealWord.textContent = gameState.word.toUpperCase();

    const impostorText = gameState.impostorPlayers
        .map(p => `Jugador ${p}`)
        .join(', ');
    elements.impostorsList.textContent = impostorText;

    showScreen('result');
}

function playAgain() {
    startGame();
}

function goHome() {
    startMenuMusic();
    showScreen('home');
}

// ============================================
// GESTOS DE LA CARTA (Swipe)
// ============================================

function setupCardGestures() {
    const card = elements.card;
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let hasSeenCard = false; // Controla si el jugador ya vio la carta

    function handleStart(e) {
        // Si ya pasó al siguiente jugador, no permitir
        if (gameState.cardRevealed) return;

        isDragging = true;
        startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        currentY = startY;
        elements.cardInner.style.transition = 'none';
    }

    function handleMove(e) {
        if (!isDragging) return;
        e.preventDefault();

        currentY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        const deltaY = startY - currentY;

        if (deltaY > 0) {
            // Mientras arrastra hacia arriba, rotar la carta proporcionalmente
            const progress = Math.min(deltaY / 100, 1);
            elements.cardInner.style.transform = `rotateY(${progress * 180}deg)`;

            // Si llegó al máximo, marcar como vista
            if (progress >= 1 && !hasSeenCard) {
                hasSeenCard = true;
            }
        }
    }

    function handleEnd() {
        if (!isDragging) return;
        isDragging = false;

        // Siempre volver la carta a su posición original (oculta)
        elements.cardInner.style.transition = 'transform 0.4s ease';
        elements.cardInner.style.transform = 'rotateY(0deg)';

        // Si el jugador vio la carta completamente, habilitar el botón
        if (hasSeenCard && !gameState.cardRevealed) {
            gameState.cardRevealed = true;
            elements.btnNextPlayer.disabled = false;
            elements.card.classList.add('seen');
        }
    }

    // Resetear hasSeenCard cuando cambia de jugador
    const originalUpdateRevealScreen = updateRevealScreen;
    updateRevealScreen = function() {
        hasSeenCard = false;
        originalUpdateRevealScreen();
    };

    card.addEventListener('touchstart', handleStart, { passive: true });
    card.addEventListener('touchmove', handleMove, { passive: false });
    card.addEventListener('touchend', handleEnd);
    card.addEventListener('touchcancel', handleEnd);

    card.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
}

// ============================================
// MODAL
// ============================================

function showRules() {
    elements.modalRules.classList.add('active');
}

function hideRules() {
    elements.modalRules.classList.remove('active');
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Home
    document.getElementById('btnStart').addEventListener('click', () => showScreen('config'));
    document.getElementById('btnRules').addEventListener('click', showRules);

    // Config
    document.getElementById('btnBackConfig').addEventListener('click', () => showScreen('home'));
    document.getElementById('btnModeClassic').addEventListener('click', () => setMode('classic'));
    document.getElementById('btnModeChaos').addEventListener('click', () => setMode('chaos'));
    document.getElementById('btnPlayersMinus').addEventListener('click', () => adjustPlayers(-1));
    document.getElementById('btnPlayersPlus').addEventListener('click', () => adjustPlayers(1));
    document.getElementById('btnImpostorsMinus').addEventListener('click', () => adjustImpostors(-1));
    document.getElementById('btnImpostorsPlus').addEventListener('click', () => adjustImpostors(1));
    document.getElementById('btnTimeMinus').addEventListener('click', () => adjustTime(-1));
    document.getElementById('btnTimePlus').addEventListener('click', () => adjustTime(1));
    document.getElementById('btnStartGame').addEventListener('click', startGame);

    // Reveal
    document.getElementById('btnNextPlayer').addEventListener('click', nextPlayer);

    // Game
    document.getElementById('btnMute').addEventListener('click', toggleMute);
    document.getElementById('btnPauseTimer').addEventListener('click', togglePause);
    document.getElementById('btnEndGame').addEventListener('click', endGame);

    // Result
    document.getElementById('btnPlayAgain').addEventListener('click', playAgain);
    document.getElementById('btnBackHome').addEventListener('click', goHome);

    // Modal
    document.getElementById('closeRules').addEventListener('click', hideRules);
    document.querySelector('.modal-overlay').addEventListener('click', hideRules);

    // Setup
    setupCardGestures();
    updateConfig();

    // Añadir gradiente al SVG del timer
    const timerSvg = document.querySelector('.timer-svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#6c5ce7"/>
            <stop offset="100%" style="stop-color:#a29bfe"/>
        </linearGradient>
    `;
    timerSvg.insertBefore(defs, timerSvg.firstChild);
});

// Prevenir scroll en iOS
document.body.addEventListener('touchmove', (e) => {
    if (e.target.closest('.modal-body')) return;
    e.preventDefault();
}, { passive: false });

// Splash screen - tocar para iniciar y activar audio
const splash = document.getElementById('splashScreen');
let splashDismissed = false;

function showSplash() {
    splashDismissed = false;
    if (splash) {
        splash.classList.remove('hidden');
        splash.style.opacity = '1';
        splash.style.visibility = 'visible';
        splash.style.pointerEvents = 'auto';
    }
}

function hideSplash() {
    if (splash && !splashDismissed) {
        splashDismissed = true;
        splash.style.opacity = '0';
        splash.style.visibility = 'hidden';
        splash.style.pointerEvents = 'none';
        setTimeout(() => {
            splash.classList.add('hidden');
        }, 500);
    }
}

if (splash) {
    // Usar múltiples eventos para asegurar que funcione en iOS
    ['click', 'touchstart', 'touchend'].forEach(eventType => {
        splash.addEventListener(eventType, (e) => {
            if (splashDismissed) return;
            e.preventDefault();
            e.stopPropagation();
            initAudio();
            hideSplash();
        }, { passive: false });
    });
}

// Cuando la app vuelve a primer plano, mostrar splash para reactivar audio
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Parar música actual
        stopAllMusic();
        // Mostrar splash para que toque y reactive audio
        showSplash();
    }
});

// También detectar cuando la página se recarga o vuelve del caché
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        stopAllMusic();
        showSplash();
    }
});
