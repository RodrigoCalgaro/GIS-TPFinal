var url_ogc = require('./url_ocg')

var data = [{
        id: 1,
        nombre: 'Provincias',
        url_ogc,
        capa: 'provincias',
        visible: false
    },
    {
        id: 2,
        nombre: 'Edificio de Salud',
        url_ogc,
        capa: 'edificio_de_salud_ips',
        visible: false
    },
    {
        id: 3,
        nombre: 'Complejo de Enegía',
        url_ogc,
        capa: 'complejo_de_energia_ene',
        visible: false
    },
    {
        id: 4,
        nombre: 'Edificios de Educación',
        url_ogc,
        capa: 'edif_educacion',
        visible: false
    },
    {
        id: 5,
        nombre: 'Edificio Público',
        url_ogc,
        capa: 'edificio_publico_ips',
        visible: false
    },
    {
        id: 6,
        nombre: 'Ejido',
        url_ogc,
        capa: 'ejido',
        visible: false
    },
    {
        id: 7,
        nombre: 'Curvas de Nivel',
        url_ogc,
        capa: 'curvas_de_nivel',
        visible: false
    },
    {
        id: 8,
        nombre: 'Edificios Ferroviarios',
        url_ogc,
        capa: 'edificios_ferroviarios',
        visible: false
    },
    {
        id: 9,
        nombre: 'Espejos de Agua',
        url_ogc,
        capa: 'espejo_de_agua_hid',
        visible: false
    },
    {
        id: 10,
        nombre: 'Actividades Agropecuarias',
        url_ogc,
        capa: 'actividades_agropecuarias',
        visible: false
    },
    {
        id: 11,
        nombre: 'Edificio de Contrucciones Turísticas',
        url_ogc,
        capa: 'edif_construcciones_turisticas',
        visible: false
    },
    {
        id: 12,
        nombre: 'Actividades Económicas',
        url_ogc,
        capa: 'actividades_economicas',
        visible: false
    },
    {
        id: 13,
        nombre: 'Edificio de Deportes y Esparcimiento',
        url_ogc,
        capa: 'edif_depor_y_esparcimiento',
        visible: false
    },
    {
        id: 14,
        nombre: 'Edificio de Seguridad',
        url_ogc,
        capa: 'edificio_de_seguridad_ips',
        visible: false
    },
    {
        id: 15,
        nombre: 'Edificios Religiosos',
        url_ogc,
        capa: 'edif_religiosos',
        visible: false
    },
    {
        id: 16,
        nombre: 'Estruturas Portuarias',
        url_ogc,
        capa: 'estructuras_portuarias',
        visible: false
    },
    {
        id: 17,
        nombre: 'Curso de Agua',
        url_ogc,
        capa: 'curso_de_agua_hid',
        visible: false
    },
    {
        id: 18,
        nombre: 'Infraestructura Aeroportuaria Punto',
        url_ogc,
        capa: 'infraestructura_aeroportuaria_punto',
        visible: false
    },
    {
        id: 19,
        nombre: 'Infraestructura Hidrográfica',
        url_ogc,
        capa: 'infraestructura_hidro',
        visible: false
    },
    {
        id: 20,
        nombre: 'Isla',
        url_ogc,
        capa: 'isla',
        visible: false
    },
    {
        id: 21,
        nombre: 'Límite Político Administrativo',
        url_ogc,
        capa: 'limite_politico_administrativo_lim',
        visible: false
    },
    {
        id: 22,
        nombre: 'Líneas de Conducción',
        url_ogc,
        capa: 'líneas_de_conducción_ene',
        visible: false
    },
    {
        id: 23,
        nombre: 'Localidad',
        url_ogc,
        capa: 'localidades',
        visible: false
    },
    {
        id: 24,
        nombre: 'Marcas y Señales',
        url_ogc,
        capa: 'marcas_y_señales',
        visible: false
    },
    {
        id: 25,
        nombre: 'Muro Embalse',
        url_ogc,
        capa: 'muro_embalse',
        visible: false
    },
    {
        id: 26,
        nombre: 'Obras de Comunicación',
        url_ogc,
        capa: 'obra_de_comunicación',
        visible: false
    },
    {
        id: 27,
        nombre: 'Límites de Pais',
        url_ogc,
        capa: 'pais_lim',
        visible: false
    },
    {
        id: 28,
        nombre: 'Obas Portuarias',
        url_ogc,
        capa: 'obra_portuaria',
        visible: false
    },
    {
        id: 29,
        nombre: 'Otras Edificaciones',
        url_ogc,
        capa: 'otras_edificaciones',
        visible: false
    },
    {
        id: 30,
        nombre: 'Puente Red Vial Punto',
        url_ogc,
        capa: 'puente_red_vial_puntos',
        visible: false
    },
    {
        id: 31,
        nombre: 'Puntos de Alturas Topográfica',
        url_ogc,
        capa: 'puntos_de_alturas_topograficas',
        visible: false
    },
    {
        id: 32,
        nombre: 'Puntos del Terreno',
        url_ogc,
        capa: 'puntos_del_terreno',
        visible: false
    },
    {
        id: 33,
        nombre: 'Red Ferroviaria',
        url_ogc,
        capa: 'red_ferroviaria',
        visible: false
    },
    {
        id: 34,
        nombre: 'Red Vial',
        url_ogc,
        capa: 'red_vial',
        visible: false
    },
    {
        id: 35,
        nombre: 'Salvado de Obstáculo',
        url_ogc,
        capa: 'salvado_de_obstaculo',
        visible: false
    },
    {
        id: 36,
        nombre: 'Señalizaciones',
        url_ogc,
        capa: 'señalizaciones',
        visible: false
    },
    {
        id: 37,
        nombre: 'Suelo Congelado',
        url_ogc,
        capa: 'sue_congelado',
        visible: false
    },
    {
        id: 38,
        nombre: 'Suelo Consolidado',
        url_ogc,
        capa: 'sue_consolidado',
        visible: false
    },
    {
        id: 39,
        nombre: 'Suelo Costero',
        url_ogc,
        capa: 'sue_costero',
        visible: false
    },
    {
        id: 40,
        nombre: 'Vegetación Arbustiva',
        url_ogc,
        capa: 'veg_arbustiva',
        visible: false
    },
    {
        id: 41,
        nombre: 'Suelo Hidromorfológico',
        url_ogc,
        capa: 'sue_hidromorfologico',
        visible: false
    },
    {
        id: 42,
        nombre: 'Suelo No Consolidado',
        url_ogc,
        capa: 'sue_no_consolidado',
        visible: false
    },
    {
        id: 43,
        nombre: 'Vegetación Arbórea',
        url_ogc,
        capa: 'veg_arborea',
        visible: false
    },
    {
        id: 44,
        nombre: 'Vegetación Cultivos',
        url_ogc,
        capa: 'veg_cultivos',
        visible: false
    },
    {
        id: 45,
        nombre: 'Vegetación Hidrófila',
        url_ogc,
        capa: 'veg_hidrofila',
        visible: false
    },
    {
        id: 46,
        nombre: 'Vegetación Suelo Desnudo',
        url_ogc,
        capa: 'veg_suelo_desnudo',
        visible: false
    },
    {
        id: 47,
        nombre: 'Vias Secundarias',
        url_ogc,
        capa: 'vias_secundarias',
        visible: false
    },
    {
        id: 48,
        nombre: 'Puntos de Interes',
        url_ogc,
        capa: 'puntos_de_interes',
        visible: false
    }
]


module.exports = data