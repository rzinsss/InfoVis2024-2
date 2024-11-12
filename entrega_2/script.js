const regions = {
    "region-15": {
        name: "Región de Arica y Parinacota",
        details: "La Región de Arica y Parinacota es la región más septentrional de Chile. Su capital es la ciudad de Arica, y es conocida por su clima cálido y su proximidad al desierto de Atacama.",
        porcentage: "Porcentaje de incendios causados por accidentes: 63.8%",
        accidents: 30,
        others: 17
    },
    "region-1": {
        name: "Región de Tarapacá",
        details: "La Región de Tarapacá está ubicada en el norte de Chile. Su capital es Iquique, una ciudad conocida por su puerto, playas y por ser un centro comercial importante.",
        porcentage: "Porcentaje de incendios causados por accidentes: 54.3%",
        accidents: 13,
        others: 11
    },
    "region-2": {
        name: "Región de Antofagasta",
        details: "Antofagasta es una de las principales regiones mineras de Chile. Su capital, la ciudad de Antofagasta, es uno de los principales puertos del país, y está rodeada por el desierto de Atacama.",
        porcentage: "Porcentaje de incendios causados por accidentes: 42.2%",
        accidents: 11,
        others: 15
    },
    "region-3": {
        name: "Región de Atacama",
        details: "Atacama es conocida por su desierto, que es el más árido del mundo. Su capital es Copiapó, y la región es un importante productor de cobre y litio.",
        porcentage: "Porcentaje de incendios causados por accidentes: 24%",
        accidents: 73,
        others: 231
    },
    "region-4": {
        name: "Región de Coquimbo",
        details: "La Región de Coquimbo es famosa por su rica biodiversidad, sus playas y la actividad agrícola. La ciudad de La Serena es su capital y un importante destino turístico.",
        porcentage: "Porcentaje de incendios causados por accidentes: 63.9%",
        accidents: 845,
        others: 477
    },
    "region-5": {
        name: "Región de Valparaíso",
        details: "Valparaíso es una ciudad puerto famosa por su arquitectura histórica, su puerto y la cultura vibrante. La región también incluye a Viña del Mar, conocida por sus playas y festivales.",
        porcentage: "Porcentaje de incendios causados por accidentes: 73.6%",
        accidents: 12331,
        others: 4418
    },
    "region-RM": {
        name: "Región Metropolitana de Santiago",
        details: "La Región Metropolitana es la más densamente poblada de Chile, y es donde se encuentra Santiago, la capital del país. Es el principal centro político, económico y cultural de Chile.",
        porcentage: "Porcentaje de incendios causados por accidentes: 84.2%",
        accidents: 7799,
        others: 1467
    },
    "region-6": {
        name: "Región de O'Higgins",
        details: "La Región de O'Higgins, con su capital en Rancagua, es una zona agrícola destacada, especialmente por la producción de vino y fruta. Su historia está estrechamente vinculada a la independencia de Chile.",
        porcentage: "Porcentaje de incendios causados por accidentes: 81.7%",
        accidents: 4365,
        others: 989
    },
    "region-7": {
        name: "Región del Maule",
        details: "La Región del Maule es una de las principales regiones productoras de vino y fruta en Chile. Su capital es Talca, y la región es conocida por su clima templado y sus hermosos paisajes.",
        porcentage: "Porcentaje de incendios causados por accidentes: 81.5%",
        accidents: 10407,
        others: 2387
    },
    "region-16": {
        name: "Región de Ñuble",
        details: "Ñuble es una región recientemente creada, con la ciudad de Chillán como su capital. Es una región agrícola destacada, con un fuerte enfoque en la producción de frutas y verduras.",
        porcentage: "Porcentaje de incendios causados por accidentes: 52.5%",
        accidents: 1383,
        others: 1256
    },
    "region-8": {
        name: "Región del Biobío",
        details: "La Región del Biobío, con Concepción como su capital, es una de las regiones más industrializadas del país. Tiene una gran diversidad en su economía, que incluye la agricultura, la minería y la producción industrial.",
        porcentage: "Porcentaje de incendios causados por accidentes: 35.5%",
        accidents: 18764,
        others: 33888
    },
    "region-9": {
        name: "Región de La Araucanía",
        details: "La Araucanía es conocida por sus paisajes naturales, que incluyen bosques, montañas y lagos. La ciudad de Temuco es su capital, y la región tiene una importante población mapuche.",
        porcentage: "Porcentaje de incendios causados por accidentes: 40.7%",
        accidents: 9908,
        others: 14447
    },
    "region-14": {
        name: "Región de Los Ríos",
        details: "Los Ríos, con la ciudad de Valdivia como su capital, es una región conocida por su clima templado, bosques lluviosos y paisajes hermosos, incluidos muchos ríos y lagos.",
        porcentage: "Porcentaje de incendios causados por accidentes: 77.6%",
        accidents: 2026,
        others: 581
    },
    "region-10": {
        name: "Región de Los Lagos",
        details: "Los Lagos es famosa por su belleza natural, que incluye una gran cantidad de lagos y volcanes. Puerto Montt es su capital y un importante centro turístico y comercial.",
        porcentage: "Porcentaje de incendios causados por accidentes: 87.3%",
        accidents: 3720,
        others: 534
    },
    "region-11": {
        name: "Región de Aysén",
        details: "Aysén es una de las regiones más remotas y menos pobladas de Chile, conocida por su naturaleza virgen, montañas y glaciares. Coyhaique es su capital.",
        porcentage: "Porcentaje de incendios causados por accidentes: 69.9%",
        accidents: 428,
        others: 185
    },
    "region-12": {
        name: "Región de Magallanes",
        details: "La Región de Magallanes es la región más austral de Chile, con su capital en Punta Arenas. Es conocida por su proximidad a la Antártida y su clima frío y ventoso. También es famosa por sus paisajes patagónicos.",
        porcentage: "Porcentaje de incendios causados por accidentes: 78.1%",
        accidents: 302,
        others: 85
    }
};

let currentChart;

let incendioAudio = new Audio("Efecto de sonido de incendio forestal HD.mp3");
incendioAudio.loop = true;

const incendiosPorRegion = {
    "region-1": 24,   
    "region-2": 26,  
    "region-3": 304,  
    "region-4": 1322,   
    "region-5": 16749,  
    "region-RM": 9266,
    "region-6": 5354,
    "region-7": 12794,
    "region-8": 52652,
    "region-9": 24355,
    "region-10": 4254,
    "region-11": 613,
    "region-12": 387,
    "region-14": 2607,
    "region-15": 47,
    "region-16": 2639,
};

const PorcentajeIncendiosPorRegion = {
    "region-1": 54.3,   
    "region-2": 42.2,  
    "region-3": 24.0,  
    "region-4": 63.9,   
    "region-5": 73.6,  
    "region-RM": 84.2,
    "region-6": 81.7,
    "region-7": 81.5,
    "region-8": 35.5,
    "region-9": 40.7,
    "region-10": 87.3,
    "region-11": 69.9,
    "region-12": 78.1,
    "region-14": 77.6,
    "region-15": 63.8,
    "region-16": 52.5,
};

function ajustarVolumen(regionId) {
    const maxIncendios = 100.0;
    const incendios = PorcentajeIncendiosPorRegion[regionId] || 0;
    
    const volumen = Math.min(Math.max(incendios / maxIncendios, 0.1), 1);
    incendioAudio.volume = volumen;
}

function ColorSegunIncendio(PorcentajeIncendio) {
    if (PorcentajeIncendio > 75.0) return "#8B0000";
    if (PorcentajeIncendio > 50.0) return "#B22222";
    if (PorcentajeIncendio > 25.0) return "#FF7F7F"; 
    if (PorcentajeIncendio > 0.0) return "#FFC0CB";  
    return "#FFC0CB"; 
}

document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('click', () => {
        document.querySelectorAll('.region').forEach(r => r.classList.remove('activar'));
        region.classList.toggle('activar');

        const regionId = region.id;
        const regionInfo = regions[region.id];
        const regionName = document.getElementById('region-name');
        const regionDetails = document.getElementById('region-details');
        const regionPorcentage = document.getElementById('region-porcentage');

        regionName.textContent = regionInfo.name;
        regionDetails.textContent = regionInfo.details;
        regionPorcentage.textContent = regionInfo.porcentage

        const accidentData = regionInfo.accidents;
        const otherData = regionInfo.others;

        const ctx = document.getElementById('pieChart').getContext('2d');

        if (currentChart) {
            currentChart.destroy();
        }

        currentChart = new Chart(ctx, {
            type: 'pie', 
            data: {
                labels: ['Incendios por Accidentes', 'Incendios por Otros Motivos'],
                datasets: [{
                    label: 'Causas de Incendios',
                    data: [accidentData, otherData],
                    backgroundColor: ['#da0d0d', '#f78214'], 
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true
            }
        });

        ajustarVolumen(regionId);
        if (incendioAudio.paused) {
            incendioAudio.play();
        }

        const PorcentajeIncendio = PorcentajeIncendiosPorRegion[regionId] || 0;
        const color = ColorSegunIncendio(PorcentajeIncendio);
        region.style.fill = color;
    });
});

document.addEventListener('click', (event) => {
    const isRegionClick = event.target.classList.contains('region');
    if (!isRegionClick) {
        incendioAudio.pause();
        incendioAudio.currentTime = 0; 
    }
});
