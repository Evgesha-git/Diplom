const catalogProduct = [
    {
        id: '8521',
        manufacture: 'Samsung',
        name: 'Notebook 9 Pen',
        category: 'Ноутбук',
        img: '../../img/products/samsung_1_1.png',
        imgArr: ['../../img/products/samsung_1_2.png', '../../img/products/samsung_1_3.jpg', '../../img/products/samsung_1_4.jpg'],
        price: 3680,
        priceOff: true,
        priceOffSell: '',
        description: `Класс 	трансформер
                        Платформа (кодовое название) 	Intel Whiskey Lake
                        Тип процессора 	Intel Core i7
                        Код процессора 	8565U
                        Количество ядер процессора 	4
                        Частота процессора 	1 800 МГц
                        Turbo-частота 	4 600 МГц
                        Энергопотребление процессора 	15 Вт
                        Операционная система 	Windows 10
                        Год выхода на рынок 	2019 г.`,
        descriptionMini: 'Intel Core i7 8565U (1800 МГц), 15 (1920x1080, сенсорный) (512 Гб) SSD, 16384 Мб LPDDR3, NVIDIA GeForce MX150 (2048 Мб), веб-камера, 1.6 кг'
    },
    {
        id: '8522',
        manufacture: 'Samsung',
        name: 'Notebook 7 Force',
        category: 'Ноутбук',
        img: '../../img/products/samsung_2_1.jpg',
        imgArr: ['../../img/products/samsung_2_2.jpg', '../../img/products/samsung_2_3.jpg','../../img/products/samsung_2_4.jpg'],
        price: 3780,
        priceOff: false,
        priceOffSell: '',
        description: `Класс 	ультрабук
                        Платформа (кодовое название) 	Intel Whiskey Lake
                        Тип процессора 	Intel Core i7
                        Код процессора 	8565U
                        Количество ядер процессора 	4
                        Частота процессора 	1 800 МГц
                        Turbo-частота 	4 600 МГц
                        Энергопотребление процессора 	15 Вт
                        Операционная система 	Windows 10
                        Год выхода на рынок 	2019 г.`,
        descriptionMini:'Intel Core i7 8565U (1800 МГц), 15.6 (1920x1080) (512 Гб) SSD, 16384 Мб DDR4, NVIDIA GeForce GTX 1650 (4096 Мб), веб-камера, 1.9 кг'
    },
    {
        id: '8523',
        manufacture: 'Samsung',
        name: 'Galaxy A50',
        category: 'Смартфон',
        img: '../../img/products/samsung_3_1.jpg',
        imgArr: ['../../img/products/samsung_3_2.jpg', '../../img/products/samsung_3_3.jpg', '../../img/products/samsung_3_4.jpg'],
        price: 490,
        priceOff: false,
        priceOffSell: '',
        description: `Тип 	смартфон
                        Стандарт 	LTE, 3G (UMTS), GSM 900, GSM 1800, GSM 1900
                        Платформа 	Android
                        Операционная система 	Android 9.0
                        Процессор 	Exynos 9610
                        Количество ядер процессора 	8
                        Частота процессора 	2 300 МГц
                        Видеопроцессор 	Mali-G72 MP3
                        Объем оперативной памяти 	4 096 Мб
                        Объем встроенной памяти 	64 Гб
                        Слот для карты памяти 	
                        Тип карт памяти 	microSD (TransFlash), micro SDHC, micro SDXC
                        Макс. объем карты памяти 	512 Гб
                        Совмещенный слот для SIM-карты и карты памяти 	
                        Год выхода на рынок 	2019 г
                        Габариты (ВхШхТ) 	158.5x74.7x7.7 мм
                        Вес 	166 г`,
        descriptionMini:`Экран: 6.4'', 1080x2340 px, AMOLED
                            Система: Android 9.0, Exynos 9610, 8-ядерный 2300 МГц
                            Память: ОЗУ: 4096 Мб, флэш: 64 Гб, карты памяти
                            Камера: тройная, основная: 25 Мп, фронтальная: 25 Мп, видео: 1920x1080
                            Связь: SIM-карт: 2, LTE, Bluetooth 5.0, NFC, выход на наушники: 3.5 мм
                            Конструкция: корпус: пластик, сканер отпечатков, сканер лица 4000 мА*ч`
    },
    {
        id: '8524',
        manufacture: 'Samsung',
        name: 'Galaxy S10',
        category: 'Смартфон',
        img: '../../img/products/samsung_4_1.jpg',
        imgArr: ['../../img/products/samsung_4_2.jpg', '../../img/products/samsung_4_3.jpg', '../../img/products/samsung_4_4.jpg'],
        price: 1480,
        priceOff: true,
        priceOffSell: '',
        description: `Тип 	смартфон
                        Стандарт 	LTE, 3G (UMTS), GSM 900, GSM 1800, GSM 1900
                        Платформа 	Android
                        Операционная система 	Android 9.0
                        Процессор 	Samsung Exynos 9820
                        Количество ядер процессора 	8
                        Частота процессора 	2 700 МГц
                        Видеопроцессор 	Mali-G76 MP12
                        Объем оперативной памяти 	8 192 Мб
                        Объем встроенной памяти 	128 Гб
                        Слот для карты памяти 	
                        Тип карт памяти 	microSD (TransFlash), micro SDHC, micro SDXC
                        Совмещенный слот для SIM-карты и карты памяти 	
                        Год выхода на рынок 	2019 г
                        Габариты (ВхШхТ) 	149.9x70.4x7.8 мм
                        Вес 	157 г`,
        descriptionMini: `Экран: 6.1'', 1440x3040 px, AMOLED
                            Система: Android 9.0, Samsung Exynos 9820, 8-ядерный 2700 МГц
                            Память: ОЗУ: 8192 Мб, флэш: 128 Гб, карты памяти
                            Камера: тройная, основная: 16 Мп, фронтальная: 10 Мп, видео: 3840x2160
                            Связь: SIM-карт: 2, LTE, Bluetooth 5.0, NFC, выход на наушники: 3.5 мм
                            Конструкция: корпус: металл и стекло, сканер отпечатков, сканер лица, водозащита, Li-Ion 3400 мА*ч`
    },
    {
        id: '8525',
        manufacture: 'Sony',
        name: 'Xperia 5',
        category: 'Смартфон',
        img: '../../img/products/sony_1_1.jpg',
        imgArr: ['../../img/products/sony_1_2.jpg','../../img/products/sony_1_3.jpg','../../img/products/sony_1_4.jpg'],
        price: 1660,
        priceOff: true,
        priceOffSell: '',
        description: `Тип 	смартфон
                        Стандарт 	LTE, 3G (UMTS), GSM 900, GSM 1800, GSM 1900
                        Платформа 	Android
                        Операционная система 	Android 9.0
                        Процессор 	Qualcomm Snapdragon 855
                        Количество ядер процессора 	8
                        Частота процессора 	2 840 МГц
                        Видеопроцессор 	Adreno 640
                        Объем оперативной памяти 	6 144 Мб
                        Объем встроенной памяти 	128 Гб
                        Слот для карты памяти 	
                        Тип карт памяти 	microSD (TransFlash), micro SDHC, micro SDXC
                        Совмещенный слот для SIM-карты и карты памяти 	
                        Год выхода на рынок 	2019 г
                        Габариты (ВхШхТ) 	158x68x8.2 мм
                        Вес 	164 г`,
        descriptionMini:`Экран: 6.1'', 1080x2520 px, POLED
                            Система: Android 9.0, Qualcomm Snapdragon 855, 8-ядерный 2840 МГц
                            Память: ОЗУ: 6144 Мб, флэш: 128 Гб, карты памяти
                            Камера: тройная, основная: 12 Мп, фронтальная: 8 Мп, видео: 3840x2160
                            Связь: SIM-карт: 2, LTE, Bluetooth 5.0, NFC, выход на наушники: USB Type-C
                            Конструкция: корпус: металл и стекло, сканер отпечатков, сканер лица, водозащита, Li-Ion 3140 мА*ч`
    },
    {
        id: '8526',
        manufacture: 'Sony',
        name: 'Xperia 10 Plus Dual SIM',
        category: 'Смартфон',
        img: '../../img/products/sony_2_1.png',
        imgArr: ['../../img/products/sony_2_2.jpg', '../../img/products/sony_2_3.jpg', '../../img/products/sony_2_4.jpg'],
        price: 650,
        priceOff: true,
        priceOffSell: '',
        description: `Тип 	смартфон
                        Стандарт 	LTE, 3G (UMTS), GSM 900, GSM 1800, GSM 1900
                        Платформа 	Android
                        Операционная система 	Android 9.0
                        Процессор 	Qualcomm Snapdragon 636
                        Количество ядер процессора 	8
                        Частота процессора 	1 800 МГц
                        Видеопроцессор 	Adreno 509
                        Объем оперативной памяти 	4 096 Мб
                        Объем встроенной памяти 	64 Гб
                        Слот для карты памяти 	
                        Тип карт памяти 	microSD (TransFlash), micro SDHC, micro SDXC
                        Макс. объем карты памяти 	512 Гб
                        Совмещенный слот для SIM-карты и карты памяти 	
                        Год выхода на рынок 	2019 г
                        Габариты (ВхШхТ) 	167x73x8.3 мм
                        Вес 	180 г`,
        descriptionMini:`Экран: 6.5'', 1080x2520 px, IPS
                            Система: Android 9.0, Qualcomm Snapdragon 636, 8-ядерный 1800 МГц
                            Память: ОЗУ: 4096 Мб, флэш: 64 Гб, карты памяти
                            Камера: двойная, основная: 12 Мп, фронтальная: 8 Мп, видео: 3840x2160
                            Связь: SIM-карт: 2, LTE, Bluetooth 5.0, NFC, выход на наушники: USB Type-C
                            Конструкция: корпус: пластик, сканер отпечатков, сканер лица, Li-Ion 3000 мА*ч`
    },
    {
        id: '8527',
        manufacture: 'Sony',
        name: 'Xperia XA2 Plus',
        category: 'Смартфон',
        img: '../../img/products/sony_3_1.jpg',
        imgArr: ['../../img/products/sony_3_2.jpg', '../../img/products/sony_3_3.jpg', '../../img/products/sony_3_4.jpg'],
        price: 680,
        priceOff: false,
        priceOffSell: '',
        description: `Тип 	смартфон
                        Стандарт 	LTE, 3G (UMTS), GSM 900, GSM 1800, GSM 1900
                        Платформа 	Android
                        Операционная система 	Android 8.1
                        Процессор 	Qualcomm Snapdragon 630
                        Количество ядер процессора 	8
                        Частота процессора 	2 200 МГц
                        Видеопроцессор 	Adreno 508
                        Объем оперативной памяти 	6 144 Мб
                        Объем встроенной памяти 	64 Гб
                        Слот для карты памяти 	
                        Тип карт памяти 	microSD (TransFlash), micro SDHC, micro SDXC
                        Год выхода на рынок 	2018 г
                        Габариты (ВхШхТ) 	157x75x9.6 мм
                        Вес 	204 г`,
        descriptionMini:`Экран: 6'', 1080x2160 px, IPS
                            Система: Android 8.1, Qualcomm Snapdragon 630, 8-ядерный 2200 МГц
                            Память: ОЗУ: 6144 Мб, флэш: 64 Гб, карты памяти
                            Камера: основная: 23 Мп, фронтальная: 8 Мп, видео: 3840x2160
                            Связь: SIM-карт: 2, LTE, Bluetooth 5.0, NFC, выход на наушники: 3.5 мм
                            Конструкция: корпус: металл и пластик, сканер отпечатков, водозащита, Li-Ion 3580 мА*ч`
    },
    {
        id: '8529',
        manufacture: 'LG',
        name: 'G7',
        category: 'Смартфон',
        img: '../../img/products/lg_1_1.jpg',
        imgArr: ['../../img/products/lg_1_2.jpg', '../../img/products/lg_1_3.jpg', '../../img/products/lg_1_4.jpg'],
        price: 820,
        priceOff: true,
        priceOffSell: '',
        description: `Тип 	смартфон
                        Стандарт 	LTE, 3G (UMTS), GSM 900, GSM 1800, GSM 1900
                        Платформа 	Android
                        Операционная система 	Android 8.0
                        Процессор 	Qualcomm Snapdragon 845
                        Количество ядер процессора 	8
                        Частота процессора 	2 650 МГц
                        Видеопроцессор 	Adreno 630
                        Объем оперативной памяти 	4 096 Мб
                        Объем встроенной памяти 	64 Гб
                        Слот для карты памяти 	
                        Тип карт памяти 	microSD (TransFlash), micro SDHC, micro SDXC
                        Год выхода на рынок 	2018 г
                        Габариты (ВхШхТ) 	153.2x71.9x7.9 мм
                        Вес 	162 г`,
        descriptionMini: `Экран: 6.1'', 1440x3120 px, IPS
                            Система: Android 8.0, Qualcomm Snapdragon 845, 8-ядерный 2650 МГц
                            Память: ОЗУ: 4096 Мб, флэш: 64 Гб, карты памяти
                            Камера: двойная, основная: 16 Мп, фронтальная: 8 Мп
                            Связь: SIM-карт: 2, LTE, Bluetooth 5.0, NFC
                            Конструкция: корпус: металл и стекло, сканер отпечатков, сканер лица, водозащита, Li-Ion 3000 мА*ч`
    },
    {
        id: '8530',
        manufacture: 'LG',
        name: 'G6',
        category: 'Смартфон',
        img: '../../img/products/lg_2_1.jpeg',
        imgArr: ['../../img/products/lg_2_2.jpeg', '../../img/products/lg_2_3.jpg', '../../img/products/lg_2_4.jpg'],
        price: 710,
        priceOff: true,
        priceOffSell: 650,
        description: `Тип 	смартфон
                        Стандарт 	LTE, 3G (UMTS), GSM 900, GSM 1800, GSM 1900
                        Платформа 	Android
                        Операционная система 	Android 7.0
                        Процессор 	Qualcomm Snapdragon 821 MSM8996
                        Количество ядер процессора 	4
                        Частота процессора 	2 350 МГц
                        Видеопроцессор 	Adreno 530
                        Объем оперативной памяти 	4 096 Мб
                        Объем встроенной памяти 	64 Гб
                        Слот для карты памяти 	
                        Тип карт памяти 	microSD (TransFlash), micro SDHC, micro SDXC
                        Макс. объем карты памяти 	256 Гб
                        Год выхода на рынок 	2017 г
                        Габариты (ВхШхТ) 	148.9x71.9x7.9 мм
                        Вес 	163 г`,
        descriptionMini: `Экран: 5.7'', 1440x2880 px, IPS
                            Система: Android 7.0, Qualcomm Snapdragon 821 MSM8996, 4-ядерный 2350 МГц
                            Память: ОЗУ: 4096 Мб, флэш: 64 Гб, карты памяти
                            Камера: двойная, основная: 13 Мп, фронтальная: 5 Мп, видео: 3840x2160
                            Связь: SIM-карт: 2, LTE, Bluetooth 4.2, NFC, выход на наушники: 3.5 мм
                            Конструкция: корпус: металл и стекло, сканер отпечатков, водозащита, ударопрочный корпус, Li-polymer 3300 мА*ч`
    },
    {
        id: '8531',
        manufacture: 'LG',
        name: 'V40 ThinQ Dual SIM',
        category: 'Смартфон',
        img: '../../img/products/lg_3_1.jpg',
        imgArr: ['../../img/products/lg_3_2.jpg', '../../img/products/lg_3_3.jpg', '../../img/products/lg_3_4.jpg'],
        price: 1200,
        priceOff: false,
        priceOffSell: '',
        description: `Тип 	смартфон
                        Стандарт 	LTE, 3G (UMTS), GSM 900, GSM 1800, GSM 1900
                        Платформа 	Android
                        Операционная система 	Android 8.1
                        Процессор 	Qualcomm Snapdragon 845
                        Количество ядер процессора 	8
                        Частота процессора 	2 800 МГц
                        Видеопроцессор 	Adreno 630
                        Объем оперативной памяти 	6 144 Мб
                        Объем встроенной памяти 	128 Гб
                        Слот для карты памяти 	
                        Тип карт памяти 	microSD (TransFlash), micro SDHC, micro SDXC
                        Макс. объем карты памяти 	512 Гб
                        Совмещенный слот для SIM-карты и карты памяти 	
                        Год выхода на рынок 	2018 г
                        Габариты (ВхШхТ) 	158.7x75.8x7.7 мм
                        Вес 	169 г`,
        descriptionMini: `Экран: 6.4'', 1440x3120 px, POLED
                            Система: Android 8.1, Qualcomm Snapdragon 845, 8-ядерный 2800 МГц
                            Память: ОЗУ: 6144 Мб, флэш: 128 Гб, карты памяти
                            Камера: двойная, тройная, основная: 12 Мп, фронтальная: 8 Мп, видео: 3840x2160
                            Связь: SIM-карт: 2, LTE, Bluetooth 5.0, NFC, выход на наушники: 3.5 мм
                            Конструкция: корпус: металл и стекло, сканер отпечатков, водозащита, Li-polymer 3300 мА*ч`
    },
    {
        id: '8532',
        manufacture: 'Yamaha',
        name: 'YAS-207',
        category: 'Аудиосистеам',
        img: '../../img/products/yamaha_1_1.jpg',
        imgArr: ['../../img/products/yamaha_1_2.jpg', '../../img/products/yamaha_1_3.jpg', '../../img/products/yamaha_1_4.jpg'],
        price: 880,
        priceOff: false,
        priceOffSell: '',
        description: `Тип акустической системы 	активная
                        Звуковая панель 	
                        Саундбар 	
                        Стандарт 	2.1
                        Суммарная мощность 	200 Вт
                        Фронтальные колонки 	1
                        Тип фронтальных колонок 	полочные
                        Тыловые колонки 	
                        Центральные тыловые колонки 	
                        Центральный канал 	
                        Сабвуфер 	1`,
        descriptionMini: `активная, 2.1, 200 Вт, фронт: 100 Вт, dolby Digital, dolby Pro Logic II, DTS, пульт ДУ`
    },
    {
        id: '8533',
        manufacture: 'Yamaha',
        name: 'NS-777',
        category: 'Аудиосистеам',
        img: '../../img/products/yamaha_2_1.jpg',
        imgArr: ['../../img/products/yamaha_2_2.jpg', '../../img/products/yamaha_2_3.jpg', '../../img/products/yamaha_2_4.jpg'],
        price: 927,
        priceOff: true,
        priceOffSell: '',
        description: 'Среди напольных акустических систем от Yamaha особое внимание привлекает модель Yamaha NS-777. Данный продукт обладает достаточно интересным и оригинальным дизайном, выполненным с применением темных деревянных панелей и металлических диффузоров различного диаметра, широким диапазоном проигрываемых частот (30-35000 Гц), высоким уровнем чувствительности и выходной мощности. Если рассматривать непосредственно конструктивные особенности модели, они включают в себя магнитное экранирование, интегрированный фазоинвертор для улучшенного воспроизведения басов, позолоченные разъемы и специальные ножки, надежно прикрепленные к низу корпуса. Звучание Yamaha NS-777достаточно глубокое и насыщенное. Каждая колонка имеет четыре высококачественных динамика, которые в комплексе гарантируют ровный и стабильный звук во всем диапазоне аудио частот.',
        descriptionMini:'фронтальный громкоговоритель, напольная, пассивная, фазоинверторного типа, полос: 3, 100 Вт, 30-35000 Гц, магнитная защита, 276х1100х390 мм, 24.4 кгNS-555'
    },
    {
        id: '8534',
        manufacture: 'Yamaha',
        name: 'A-S301',
        category: 'Аудиосистеам',
        img: '../../img/products/yamaha_3_1.jpg',
        imgArr: ['../../img/products/yamaha_3_2.jpg', '../../img/products/yamaha_3_3.jpg', '../../img/products/yamaha_3_4.jpg'],
        price: 817,
        priceOff: false,
        priceOffSell: '',
        description: `Тип 	интегральный усилитель
                        Стандарт 	стерео
                        Количество каналов 	2
                        Схемотехника 	полупроводниковый`,
        descriptionMini: 'интегральный усилитель, стерео, каналов: 2 x 70 Вт, 10-100000 Гц, С/Ш 99 дБ, КНИ 0.019 %, пульт ДУ'
    },
    {
        id: '8535',
        manufacture: 'Sharp',
        name: 'LC-32HI3012E',
        category: 'Телефизор',
        img: '../../img/products/sharp_1.jpg',
        imgArr: ['../../img/products/sharp_2.jpg', '../../img/products/sharp_3.jpg', '../../img/products/sharp_4.jpg'],
        price: 380,
        priceOff: false,
        priceOffSell: '',
        description: `Тип 	ЖК
                        Диагональ 	32''
                        Разрешение 	1366x768
                        HD-формат 	720p
                        Светодиодная подсветка 	
                        Изогнутый экран 	
                        Формат телевизора 	16:9
                        Стереозвук 	
                        Поддержка 3D 	
                        Дата выхода на рынок 	2018`,
        descriptionMini:`Экран: ЖК, 32'', 1366x768 px
                        Изображение: индекс визуального восприятия: 50
                        Стандарты: DVB-T, DVB-T2, DVB-C, DVB-S, DVB-S2
                        Мультимедиа: 2 динамика (20 Вт)
                        Интерфейсы: 2x USB`
    }
]