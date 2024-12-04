// script.js

document.addEventListener("DOMContentLoaded", () => {
    const regions = document.querySelectorAll(".region");
    const regionName = document.getElementById("region-name");
    const regionDetails = document.getElementById("region-details");

    const data = {
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

    const sounds = {
        "Region-1": new Audio("sounds/region1.mp3"),
        "Region-2": new Audio("sounds/region2.mp3"),
        "Region-3": new Audio("sounds/region3.mp3"),
        "Region-4": new Audio("sounds/region4.mp3"),
        "Region-5": new Audio("sounds/region5.mp3"),
        "Region-RM": new Audio("sounds/regionRM.mp3"),
        "Region-6": new Audio("sounds/region6.mp3"),
        "Region-7": new Audio("sounds/region7.mp3"),
        "Region-8": new Audio("sounds/region8.mp3"),
        "Region-9": new Audio("sounds/region9.mp3"),
        "Region-10": new Audio("sounds/region10.mp3"),
        "Region-11": new Audio("sounds/region11.mp3"),
        "Region-12": new Audio("sounds/region12.mp3"),
        "Region-14": new Audio("sounds/region14.mp3"),
        "Region-15": new Audio("sounds/region15.mp3"),
        "Region-16": new Audio("sounds/region16.mp3"),
    };

    let currentRegion = null;

    // Detect motion using DeviceOrientation API
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation);
    } else {
        regionDetails.textContent = "Tu dispositivo no soporta interacciones por movimiento.";
    }

    function handleOrientation(event) {
        const { beta, gamma } = event; // beta: front/back, gamma: left/right
        let selectedRegion;

        if (gamma < -10) {
            selectedRegion = document.getElementById("region-1");
        } else if (gamma >= -10 && gamma <= 10) {
            selectedRegion = document.getElementById("region-2");
        } else if (gamma > 10) {
            selectedRegion = document.getElementById("region-3");
        }

        if (selectedRegion && selectedRegion !== currentRegion) {
            if (currentRegion) currentRegion.classList.remove("activar");
            selectedRegion.classList.add("activar");
            currentRegion = selectedRegion;

            const regionId = selectedRegion.id; // ID de la región actual
            const name = data[regionId].name;
            regionName.textContent = name;
            regionDetails.textContent = `Datos relevantes sobre ${name}.`;

            playDynamicSound(regionId);

            saveRegion(name);

            // Play associated sound
            playSound(name);
        }
    }

    function playSound(region) {
        for (let key in sounds) {
            sounds[key].pause();
            sounds[key].currentTime = 0;
        }
        sounds[region]?.play();
    }

    function highlightRegion(region) {
        region.classList.add("activar", "pulsar");
        setTimeout(() => region.classList.remove("pulsar"), 3000); // Solo pulsa por 3 segundos
    }

    function generateSound(dataValue) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
    
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(dataValue * 10, audioContext.currentTime); // Frecuencia proporcional
        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // Volumen
    
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
    
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 2); // Duración de 2 segundos
    }
    
    function playDynamicSound(regionName) {
        const dataValue = data[regionName]?.accidents || 10; // Valor por defecto
        generateSound(dataValue);
    }

    let exploredRegions = [];

    function saveRegion(name) {
        if (!exploredRegions.includes(name)) {
            exploredRegions.push(name);
            alert(`Has explorado: ${exploredRegions.join(", ")}`);
        }
    }
});
