import React, { Fragment, useState } from 'react';
import Combobox from "react-widgets/Combobox";
import { MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCardHeader, 
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter, 
    MDBInputGroup,
    MDBTable,
    MDBTableHead,
    MDBTableBody } from 'mdb-react-ui-kit';
import { saveItemList } from '../services/storage'

let requestJSON = {
    "applicationAudit": {
        "auditedSteps": [],
        "calculatedVars": [],
        "isAuditEnabled": true,
        "isCalculatedVarsEnabled": true
    },
    "competidoresEspecificos": [{
            "idCompetidor": 0,
            "integrantesCompetencia": 0,
            "marcaVerificadoGrupal": "",
            "minimoIntegrantes": 5,
            "potencialAtraccionGrupal": "N"
        }
    ],
    "decision": {},
    "frecuenciaSolicitada": "SEMANAL",
    "idProductoSeleccionadoVentas": "",
    "momento": 2,
    "montoGrupalSolicitado": 0,
    "numeroIntegrantes": 6,
    "participantes": [{
            "bloqueos": [],
            "capacidadPagoSolicitado": 2369.9482690015736,
            "ciclosTotales": 0,
            "ciclosTotalesGrupal": 0,
            "ciclosTotalesIndividual": 0,
            "idCompetidor": 0,
            "idPersona": 201695629,
            "montoAnterior": -1.0,
            "ofertas": [{
                    "seguroSeleccionado": "SEG_PLUS_COMPARTAMOS",
                    "flagActualizacion": "S",
                    "cambioMonto": 0,
                    "costoTotalSeguros": 822.56,
                    "estatusOfertaGrupal": "Aceptado",
                    "familiaProductos": [{
                            "idFamiliaProducto": "GRUPAL",
                            "productos": [{
                                    "scoreFull": "EXCELENTE",
                                    "nivelRiesgo": ["EXCELENTE PLUS", "BUENO", "EXCELENTE"],
                                    "actividadEconomicaExcluida": [],
                                    "aseguradoras": [],
                                    "canalEntrada": [],
                                    "competidoresEspecificos": [{
                                            "idCompetidor": 39328338,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328339,
                                            "minimoIntegrantes": 5
                                        }
                                    ],
                                    "flagProductoViable": "S",
                                    "frecuencias": [],
                                    "genero": [],
                                    "idMoneda": [],
                                    "idProducto": "C_GRUPAL_CCR",
                                    "idProductoComercial": "C_GRUPAL_CCR",
                                    "medioDispersion": [],
                                    "minimoIntegrantes": 5,
                                    "montoMaximo": 60000.0,
                                    "montoMinimo": 6000.0,
                                    "nacionalidad": [],
                                    "paisOferta": [],
                                    "productosConvivencias": [],
                                    "productosPrevios": [],
                                    "sede": [],
                                    "tipoModeloPrecio": "GRUPAL 2",
                                    "tipoSeguroObligatorio": [{
                                            "idProducto": "SEG_BAS_COMERCIANTE"
                                        }, {
                                            "idProducto": "SEG_ROBO_CCR"
                                        }
                                    ]
                                }
                            ]
                        }, {
                            "idFamiliaProducto": "SEGUROS",
                            "productos": [{
                                    "actividadEconomicaExcluida": [],
                                    "aplicaSemanaAdicional": "N",
                                    "aseguradoras": [{
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "S",
                                            "costoInicialSeguro": 38.56,
                                            "costoSeguroSinDevengo": 38.56,
                                            "costoSemanal": 2.41,
                                            "costoTotalAseguradora": 38.56,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{
                                                    "costoAseguradora": 2.41,
                                                    "rango": 2
                                                }
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }
                                    ],
                                    "canalEntrada": [],
                                    "competidoresEspecificos": [],
                                    "costoProductoSinDevengo": 38.56,
                                    "costoTotalProducto": 38.56,
                                    "flagProductoViable": "S",
                                    "flagSeguroObligatorio": "S",
                                    "frecuencias": [],
                                    "genero": [],
                                    "idMoneda": [],
                                    "idProducto": "SEG_BAS_COMERCIANTE",
                                    "idProductoComercial": "SEG_BAS_COMERCIANTE",
                                    "subFamiliaProductosSeguros": "SEGURO DE VIDA BASICO",
                                    "extensionSeguro": "S",
                                    "extension": [{
                                            "minPlazo": 2,
                                            "maxPlazo": 8,
                                            "duracionPlazo": "MENSUAL",
                                            "tiempoExtension": 3,
                                            "duracionExtension": "MENSUAL"
                                        }, {
                                            "minPlazo": 9,
                                            "maxPlazo": 24,
                                            "duracionPlazo": "MENSUAL",
                                            "tiempoExtension": 6,
                                            "duracionExtension": "MENSUAL"
                                        }
                                    ],
                                    "medioDispersion": [],
                                    "nacionalidad": [],
                                    "paisOferta": [],
                                    "plazoCalculoSeguroSolicitado": 16,
                                    "productosConvivencias": [],
                                    "productosPrevios": [],
                                    "sede": [],
                                    "seguroDisponible": "S",
                                    "tipoSeguroObligatorio": []
                                }, {
                                    "actividadEconomicaExcluida": [],
                                    "aplicaSemanaAdicional": "N",
                                    "aseguradoras": [{
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "S",
                                            "costoInicialSeguro": 713.6,
                                            "costoSeguroSinDevengo": 713.6,
                                            "costoSemanal": 44.6,
                                            "costoTotalAseguradora": 713.6,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{
                                                    "costoAseguradora": 44.6,
                                                    "rango": 1
                                                }, {
                                                    "costoAseguradora": 79.6,
                                                    "rango": 2
                                                }
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }, {
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "N",
                                            "costoInicialSeguro": 6.4,
                                            "costoSeguroSinDevengo": 6.4,
                                            "costoSemanal": 0.4,
                                            "costoTotalAseguradora": 6.4,
                                            "idAseguradora": 2,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{
                                                    "costoAseguradora": 0.4,
                                                    "rango": 1
                                                }, {
                                                    "costoAseguradora": 0.4,
                                                    "rango": 2
                                                }
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }, {
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "N",
                                            "costoInicialSeguro": 0.0,
                                            "costoSeguroSinDevengo": 0.0,
                                            "costoSemanal": 0.0,
                                            "costoTotalAseguradora": 0.0,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{}
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }, {
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "N",
                                            "costoInicialSeguro": 0.0,
                                            "costoSeguroSinDevengo": 0.0,
                                            "costoSemanal": 0.0,
                                            "costoTotalAseguradora": 0.0,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{}
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }
                                    ],
                                    "canalEntrada": [],
                                    "competidoresEspecificos": [],
                                    "costoProductoSinDevengo": 720.0,
                                    "costoTotalProducto": 720.0,
                                    "flagProductoViable": "S",
                                    "flagSeguroObligatorio": "N",
                                    "frecuencias": [],
                                    "genero": [],
                                    "idMoneda": [],
                                    "idProducto": "SEG_VOL_COMERCIANTE",
                                    "idProductoComercial": "SEG_VOL_COMERCIANTE",
                                    "subFamiliaProductosSeguros": "SEGURO DE PROTECCION",
                                    "medioDispersion": [],
                                    "nacionalidad": [],
                                    "paisOferta": [],
                                    "plazoCalculoSeguroSolicitado": 16,
                                    "productosConvivencias": [],
                                    "productosPrevios": [],
                                    "sede": [],
                                    "seguroDisponible": "S",
                                    "tipoSeguroObligatorio": []
                                }, {
                                    "actividadEconomicaExcluida": [],
                                    "aplicaSemanaAdicional": "N",
                                    "aseguradoras": [{
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "N",
                                            "costoInicialSeguro": 64.0,
                                            "costoSeguroSinDevengo": 64.0,
                                            "costoSemanal": 4.0,
                                            "costoTotalAseguradora": 64.0,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{
                                                    "costoAseguradora": 4.0,
                                                    "rango": 2
                                                }
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }
                                    ],
                                    "canalEntrada": [],
                                    "competidoresEspecificos": [],
                                    "costoProductoSinDevengo": 64.0,
                                    "costoTotalProducto": 64.0,
                                    "flagProductoViable": "S",
                                    "flagSeguroObligatorio": "S",
                                    "frecuencias": [],
                                    "genero": [],
                                    "idMoneda": [],
                                    "idProducto": "SEG_ROBO_CCR",
                                    "idProductoComercial": "SEG_ROBO_CCR",
                                    "subFamiliaProductosSeguros": "SEGURO DE ROBO",
                                    "medioDispersion": [],
                                    "nacionalidad": [],
                                    "paisOferta": [],
                                    "plazoCalculoSeguroSolicitado": 16,
                                    "productosConvivencias": [],
                                    "productosPrevios": [],
                                    "sede": [],
                                    "seguroDisponible": "S",
                                    "tipoSeguroObligatorio": [],
                                    "extensionSeguro": "S",
                                    "extension": [{
                                            "minPlazo": 2,
                                            "maxPlazo": 3,
                                            "duracionPlazo": "MENSUAL",
                                            "tiempoExtension": 3,
                                            "duracionExtension": "MENSUAL"
                                        }, {
                                            "minPlazo": 4,
                                            "maxPlazo": 24,
                                            "duracionPlazo": "MENSUAL",
                                            "tiempoExtension": 6,
                                            "duracionExtension": "MENSUAL"
                                        }
                                    ]
                                }, {
                                    "actividadEconomicaExcluida": [],
                                    "aplicaSemanaAdicional": "N",
                                    "aseguradoras": [{
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "N",
                                            "costoInicialSeguro": 64.0,
                                            "costoSeguroSinDevengo": 64.0,
                                            "costoSemanal": 4.0,
                                            "costoTotalAseguradora": 64.0,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{
                                                    "costoAseguradora": 4.0,
                                                    "rango": 2
                                                }
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }
                                    ],
                                    "canalEntrada": [],
                                    "competidoresEspecificos": [],
                                    "costoProductoSinDevengo": 64.0,
                                    "costoTotalProducto": 64.0,
                                    "flagProductoViable": "S",
                                    "flagSeguroObligatorio": "S",
                                    "frecuencias": [],
                                    "genero": [],
                                    "idMoneda": [],
                                    "idProducto": "SEG_PLUS_COMPARTAMOS",
                                    "idProductoComercial": "SEG_PLUS_COMPARTAMOS",
                                    "subFamiliaProductosSeguros": "SEGURO DE PROTECCION",
                                    "medioDispersion": [],
                                    "nacionalidad": [],
                                    "paisOferta": [],
                                    "plazoCalculoSeguroSolicitado": 16,
                                    "productosConvivencias": [],
                                    "productosPrevios": [],
                                    "sede": [],
                                    "seguroDisponible": "S",
                                    "tipoSeguroObligatorio": [],
                                    "extensionSeguro": "S",
                                    "extension": [{
                                            "minPlazo": 2,
                                            "maxPlazo": 3,
                                            "duracionPlazo": "MENSUAL",
                                            "tiempoExtension": 3,
                                            "duracionExtension": "MENSUAL"
                                        }, {
                                            "minPlazo": 4,
                                            "maxPlazo": 24,
                                            "duracionPlazo": "MENSUAL",
                                            "tiempoExtension": 6,
                                            "duracionExtension": "MENSUAL"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "idOferta": 5339,
                    "marcaAtraccionValida": "",
                    "medioDispersion": "ORDEN DE PAGO (CANALES TERCEROS)",
                    "modalidadSeleccionada": "FAMILIAR",
                    "montoMaximoSolicitado": 24593.558316171544,
                    "montoOtorgado": 24593.558316171544,
                    "montoSolicitado": 15000.0,
                    "montoTotal": 25416.118316171545,
                    "productoSeleccionado": {
                        "capacidadPagoMaxima": 1891.0,
                        "minMontoMinimoGarantizado": 6000.0
                    },
                    "tasaBau": 1.13,
                    "tasaCalculo": 0.025487777777777774,
                    "tasaCompleta": 1.13,
                    "tipoModeloAsignado": "Grupal2",
                    "tipoTasaAsignada": "TasaBAU"
                }
            ],
            "productosContratados": [],
            "tipoAtraccion": "ATRACCIÓN INDIVIDUAL",
            "totalCiclosGrupalesEnCurso": 0,
            "totalCiclosGrupalesTerminados": 0,
            "totalCiclosIndividualesEnCurso": 0,
            "totalCiclosIndividualesTerminados": 0
        }, {
            "bloqueos": [],
            "capacidadPagoSolicitado": 3075.602116114396,
            "ciclosTotales": 0,
            "ciclosTotalesGrupal": 0,
            "ciclosTotalesIndividual": 0,
            "idCompetidor": 39328504,
            "idPersona": 201695630,
            "montoAnterior": -1.0,
            "ofertas": [{
                    "seguroSeleccionado": "SEG_VOL_COMERCIANTE",
                    "flagActualizacion": "S",
                    "cambioMonto": 40000.0,
                    "costoTotalSeguros": 0.0,
                    "estatusOfertaGrupal": "Aceptado",
                    "familiaProductos": [{
                            "idFamiliaProducto": "GRUPAL",
                            "productos": [{
                                    "scoreFull": "EXCELENTE",
                                    "nivelRiesgo": ["EXCELENTE PLUS", "BUENO", "EXCELENTE"],
                                    "actividadEconomicaExcluida": [],
                                    "aseguradoras": [],
                                    "canalEntrada": [],
                                    "competidoresEspecificos": [{
                                            "idCompetidor": 39328338,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328339,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328496,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328497,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328498,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328500,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328501,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328502,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328503,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328504,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328506,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328507,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328515,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328518,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328519,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328522,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39328523,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 39516365,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 40718675,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 40718678,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 41243529,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 44123620,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 44123621,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 44123622,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 44123623,
                                            "minimoIntegrantes": 5
                                        }, {
                                            "idCompetidor": 44123624,
                                            "minimoIntegrantes": 5
                                        }
                                    ],
                                    "flagProductoViable": "S",
                                    "frecuencias": [],
                                    "genero": [],
                                    "idMoneda": [],
                                    "idProducto": "C_GRUPAL_CCR",
                                    "idProductoComercial": "C_GRUPAL_CCR",
                                    "medioDispersion": [],
                                    "minimoIntegrantes": 5,
                                    "montoMaximo": 60000.0,
                                    "montoMinimo": 6000.0,
                                    "nacionalidad": [],
                                    "paisOferta": [],
                                    "productosConvivencias": [],
                                    "productosPrevios": [],
                                    "sede": [],
                                    "tipoModeloPrecio": "",
                                    "tipoSeguroObligatorio": [{
                                            "idProducto": "SEG_BAS_COMERCIANTE"
                                        }, {
                                            "idProducto": "SEG_ROBO_CCR"
                                        }
                                    ]
                                }
                            ]
                        }, {
                            "idFamiliaProducto": "SEGUROS",
                            "productos": [{
                                    "actividadEconomicaExcluida": [],
                                    "aplicaSemanaAdicional": "N",
                                    "aseguradoras": [{
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "S",
                                            "costoInicialSeguro": 38.56,
                                            "costoSeguroSinDevengo": 38.56,
                                            "costoSemanal": 2.41,
                                            "costoTotalAseguradora": 38.56,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{
                                                    "costoAseguradora": 2.41,
                                                    "rango": 2
                                                }
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }
                                    ],
                                    "canalEntrada": [],
                                    "competidoresEspecificos": [],
                                    "costoProductoSinDevengo": 38.56,
                                    "costoTotalProducto": 38.56,
                                    "flagProductoViable": "S",
                                    "flagSeguroObligatorio": "S",
                                    "frecuencias": [],
                                    "genero": [],
                                    "idMoneda": [],
                                    "idProducto": "SEG_BAS_COMERCIANTE",
                                    "idProductoComercial": "SEG_BAS_COMERCIANTE",
                                    "subFamiliaProductosSeguros": "SEGURO DE VIDA BASICO",
                                    "medioDispersion": [],
                                    "nacionalidad": [],
                                    "paisOferta": [],
                                    "plazoCalculoSeguroSolicitado": 16,
                                    "productosConvivencias": [],
                                    "productosPrevios": [],
                                    "sede": [],
                                    "seguroDisponible": "S",
                                    "tipoSeguroObligatorio": [],
                                    "extensionSeguro": "S",
                                    "extension": [{
                                            "minPlazo": 4,
                                            "maxPlazo": 8,
                                            "duracionPlazo": "MENSUAL",
                                            "tiempoExtension": 3,
                                            "duracionExtension": "MENSUAL"
                                        }, {
                                            "minPlazo": 9,
                                            "maxPlazo": 24,
                                            "duracionPlazo": "MENSUAL",
                                            "tiempoExtension": 6,
                                            "duracionExtension": "MENSUAL"
                                        }
                                    ]
                                }, {
                                    "actividadEconomicaExcluida": [],
                                    "aplicaSemanaAdicional": "N",
                                    "aseguradoras": [{
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "S",
                                            "costoInicialSeguro": 1273.6,
                                            "costoSeguroSinDevengo": 1273.6,
                                            "costoSemanal": 79.6,
                                            "costoTotalAseguradora": 1273.6,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{
                                                    "costoAseguradora": 44.6,
                                                    "rango": 1
                                                }, {
                                                    "costoAseguradora": 79.6,
                                                    "rango": 2
                                                }
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }, {
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "N",
                                            "costoInicialSeguro": 6.4,
                                            "costoSeguroSinDevengo": 6.4,
                                            "costoSemanal": 0.4,
                                            "costoTotalAseguradora": 6.4,
                                            "idAseguradora": 2,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{
                                                    "costoAseguradora": 0.4,
                                                    "rango": 1
                                                }, {
                                                    "costoAseguradora": 0.4,
                                                    "rango": 2
                                                }
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }, {
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "N",
                                            "costoInicialSeguro": 0.0,
                                            "costoSeguroSinDevengo": 0.0,
                                            "costoSemanal": 0.0,
                                            "costoTotalAseguradora": 0.0,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{}
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }, {
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "N",
                                            "costoInicialSeguro": 0.0,
                                            "costoSeguroSinDevengo": 0.0,
                                            "costoSemanal": 0.0,
                                            "costoTotalAseguradora": 0.0,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{}
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }
                                    ],
                                    "canalEntrada": [],
                                    "competidoresEspecificos": [],
                                    "costoProductoSinDevengo": 1280.0,
                                    "costoTotalProducto": 1280.0,
                                    "flagProductoViable": "S",
                                    "flagSeguroObligatorio": "N",
                                    "frecuencias": [],
                                    "genero": [],
                                    "idMoneda": [],
                                    "idProducto": "SEG_VOL_COMERCIANTE",
                                    "idProductoComercial": "SEG_VOL_COMERCIANTE",
                                    "subFamiliaProductosSeguros": "SEGURO DE PROTECCION",
                                    "medioDispersion": [],
                                    "nacionalidad": [],
                                    "paisOferta": [],
                                    "plazoCalculoSeguroSolicitado": 16,
                                    "productosConvivencias": [],
                                    "productosPrevios": [],
                                    "sede": [],
                                    "seguroDisponible": "S",
                                    "tipoSeguroObligatorio": [],
                                    "extensionSeguro": "N",
                                    "extension": [{
                                            "minPlazo": 2,
                                            "maxPlazo": 8,
                                            "duracionPlazo": "MENSUAL",
                                            "tiempoExtension": 3,
                                            "duracionExtension": "MENSUAL"
                                        }, {
                                            "minPlazo": 9,
                                            "maxPlazo": 24,
                                            "duracionPlazo": "MENSUAL",
                                            "tiempoExtension": 6,
                                            "duracionExtension": "MENSUAL"
                                        }
                                    ]
                                }, {
                                    "actividadEconomicaExcluida": [],
                                    "aplicaSemanaAdicional": "N",
                                    "aseguradoras": [{
                                            "aplicaDescuento": "N",
                                            "aplicaDevengo": "N",
                                            "costoInicialSeguro": 64.0,
                                            "costoSeguroSinDevengo": 64.0,
                                            "costoSemanal": 4.0,
                                            "costoTotalAseguradora": 64.0,
                                            "idAseguradora": 1,
                                            "montoDescuento": 0.0,
                                            "montoDevengo": 0.0,
                                            "rangosAsegurados": [{
                                                    "costoAseguradora": 4.0,
                                                    "rango": 2
                                                }
                                            ],
                                            "tipoCostoInicial": "Solicitado",
                                            "totalDescuento": 0.0
                                        }
                                    ],
                                    "canalEntrada": [],
                                    "competidoresEspecificos": [],
                                    "costoProductoSinDevengo": 64.0,
                                    "costoTotalProducto": 64.0,
                                    "flagProductoViable": "S",
                                    "flagSeguroObligatorio": "S",
                                    "frecuencias": [],
                                    "genero": [],
                                    "idMoneda": [],
                                    "idProducto": "SEG_ROBO_CCR",
                                    "idProductoComercial": "SEG_ROBO_CCR",
                                    "subFamiliaProductosSeguros": "SEGURO DE ROBO",
                                    "medioDispersion": [],
                                    "nacionalidad": [],
                                    "paisOferta": [],
                                    "plazoCalculoSeguroSolicitado": 16,
                                    "productosConvivencias": [],
                                    "productosPrevios": [],
                                    "sede": [],
                                    "seguroDisponible": "S",
                                    "tipoSeguroObligatorio": []
                                }
                            ]
                        }
                    ],
                    "idOferta": 5340,
                    "marcaAtraccionValida": "S",
                    "medioDispersion": "TARJETA DE DEBITO (COMPARTAMOS)",
                    "modalidadSeleccionada": "INDIVIDUAL",
                    "montoMaximoSolicitado": 24593.558316171544,
                    "montoOtorgado": 24593.558316171544,
                    "montoSolicitado": 20000.0,
                    "montoTotal": 24593.558316171544,
                    "productoSeleccionado": {
                        "capacidadPagoMaxima": 1891.0,
                        "minMontoMinimoGarantizado": 6000.0
                    },
                    "tasaBau": 1.13,
                    "tasaCalculo": 0.025487777777777774,
                    "tasaCompleta": 1.13,
                    "tipoModeloAsignado": "Grupal2",
                    "tipoTasaAsignada": "TasaBAU"
                }
            ],
            "productosContratados": [],
            "tipoAtraccion": "ATRACCIÓN INDIVIDUAL",
            "totalCiclosGrupalesEnCurso": 0,
            "totalCiclosGrupalesTerminados": 0,
            "totalCiclosIndividualesEnCurso": 0,
            "totalCiclosIndividualesTerminados": 0
        }
    ],
    "pasoLlamada": "ReprocesoPostSimulador",
    "plazoSolicitado": 16,
    "productoGrupal": {
        "competidoresExcluidos": [39328495, 39328499, 39328505, 39328508, 39328509, 39328510, 39328511, 39328512, 39328513, 39328514, 39328516, 39328517, 39328520, 39328521, 40308257, 40308258, 40718676, 40718677, 40718679, 40718680, 40718681, 40718682, 40718683, 41243530, 41243531],
        "duracionMaxima": 7,
        "duracionMinima": 4,
        "frecuenciaComision": [],
        "frecuencias": [{
                "frecuencia": "SEMANAL",
                "opcionPeriodoGracia": [],
                "opcionPlazo": [16, 20, 24, 28]
            }, {
                "frecuencia": "BISEMANAL",
                "opcionPeriodoGracia": [],
                "opcionPlazo": [8, 10, 12, 14]
            }
        ],
        "idFamiliaProductoGrupal": "GRUPAL",
        "idProductoGrupal": "C_GRUPAL_CCR",
        "medianaProductoGrupal": 6500.0,
        "montoMaximo": 60000.0,
        "montoMinimo": 6000.0,
        "numeroPagosSolicitado": 16,
        "plazoPropuesto": 10,
        "plazoSolicitadoSemanal": 16,
        "tipoModeloPrecio": "GRUPAL 2",
        "tipoSeguroObligatorio": [{
                "idProducto": "SEG_BAS_COMERCIANTE"
            }, {
                "idProducto": "SEG_ROBO_CCR"
            }
        ]
    },
    "productosContratadosGrupalAnterior": {
        "frecuencia": "",
        "idCredito": []
    },
    "regionSede": "",
    "tasaIva": 16.0,
    "tipoLlamada": "FOT3_PostScore"
}

export default function App() {

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    const [datos, setDatos] = useState({
        idCompetidor: '',
        competidoresEspecificosIdCompetidor: '',
        competidoresEspecificosMarca: '',
        participanteCiclosTotales: '',
        montoGrupalSolicitado: '',
        participanteCiclosTotalesIndividual:'',
        participanteOfertacambioMonto:'',
        regionSede:'',
        participanteOfertamarcaAtraccionValida:'',
        productoGrupaltipoModeloPrecio:'',
        idProductoSeleccionadoVentas:'',
        jsonInicial: requestJSON
    })
    
    const handleInputChange = (event) => {
        console.log(event.target.value);

        let jsonChange = {...datos.jsonInicial};
        
       if(event.target.name === "competidoresEspecificosIdCompetidor"){
        jsonChange.competidoresEspecificos[0].idCompetidor = event.target.value;
       } else if (event.target.name === "idProductoSeleccionadoVentas") {
        jsonChange.idProductoSeleccionadoVentas = event.target.value;
       } else if (event.target.name === "competidoresEspecificosMarca") {
        jsonChange.competidoresEspecificos[0].marcaVerificadoGrupal = event.target.value;
       } else if (event.target.name === "montoGrupalSolicitado") {
        jsonChange.montoGrupalSolicitado = event.target.value;
       } else if (event.target.name === "productoGrupaltipoModeloPrecio") {
        jsonChange.productoGrupal.tipoModeloPrecio = event.target.value;
       } else if (event.target.name === "regionSede") {
        jsonChange.regionSede = event.target.value;
       } else if (event.target.name === "participanteCiclosTotales") {
        jsonChange.participantes[0].ciclosTotales = event.target.value;
       } else if (event.target.name === "participanteCiclosTotalesIndividual") {
        jsonChange.participantes[0].ciclosTotalesIndividual = event.target.value;
       } else if (event.target.name === "participanteOfertacambioMonto") {
        jsonChange.participantes[0].ofertas[0].cambioMonto = event.target.value;
       } else if (event.target.name === "participanteOfertamarcaAtraccionValida") {
        jsonChange.participantes[0].ofertas[0].marcaAtraccionValida = event.target.value;
       } else if (event.target.name === "idCompetidor") { 
        jsonChange.participantes[0].idCompetidor = event.target.value;
       } else {
        jsonChange[event.target.name] = event.target.value;
       }

        console.log(jsonChange)
        setDatos({
            ...datos,
            jsonInicial: jsonChange
        })
    }

    const [ejemplo, setejemplo] = React.useState('')
    const [respTasaBau, setrespTasaBau] = React.useState('')
    //const [tasaAtraccion, settasaAtraccion] = React.useState('')
    const [respTasaCompleta, setrespTasaCompleta] = React.useState('')
    const [respTipoModeloPrecio, setrespTipoModeloPrecio] = React.useState('')
    const [respTipoTasaAsignada, setrespTipoTasaAsignada] = React.useState('')

    const sendPost = () => {
        console.clear()
        saveItemList(datos.jsonInicial).then(data => {
            console.log("Datos que se envían:", data)
            console.log("Datos de respuesta:", ejemplo)
            setejemplo(data)
            setrespTasaBau(data.participantes[0].ofertas[0].tasaBau.toString())
            //settasaAtraccion(data.participantes[0].ofertas[0].tasaCalculo.toString())
            setrespTasaCompleta(data.participantes[0].ofertas[0].tasaCompleta.toString())
            setrespTipoModeloPrecio(data.productoGrupal.tipoModeloPrecio.toString())
            setrespTipoTasaAsignada(data.participantes[0].ofertas[0].tipoTasaAsignada)

        })      
    }

  return (
      <div class="row">
          <div class="col-6 d-flex justify-content-center">    
            <MDBCard alignment='center' style={{ maxWidth: '500px' }}>
            <MDBCardHeader>GENERADOR DE JSON</MDBCardHeader>
            <MDBCardBody>
                <MDBCardTitle>Tu Json se modifica de manera automática al ingresar los datos.</MDBCardTitle>
                <MDBCardText>

                    <Fragment>
                        <form>

                            <input 
                            placeholder="Participante / idCompetidor" 
                            className="form-control mt-2" 
                            type="number"
                            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 ) && e.preventDefault() }
                            name="idCompetidor"
                            onChange={handleInputChange}/>

                            <input 
                            placeholder="Competidores Específicos / idCompetidor" 
                            className="form-control mt-2" 
                            type="number" 
                            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 ) && e.preventDefault() }
                            name="competidoresEspecificosIdCompetidor" 
                            onChange={handleInputChange}/>

                            <div class="input-group-prepend">
                                <select 
                                    class="custom-select form-control mt-2" 
                                    id="inputGroupSelect01"
                                    name="competidoresEspecificosMarca" 
                                    onChange={handleInputChange}>
                                    <option selected>Competidores Específicos / Marca Verificado Grupal</option>
                                    <option value="S">S</option>
                                    <option value="N">N</option>
                                </select>
                            </div>

                            <input 
                            placeholder="Participante / Ciclos Totales" 
                            className="form-control mt-2" 
                            type="number" 
                            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 ) && e.preventDefault() }
                            name="participanteCiclosTotales" 
                            onChange={handleInputChange}/>

                            <input 
                            placeholder="Monto Grupal Solicitado" 
                            className="form-control mt-2" 
                            type="number" 
                            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 ) && e.preventDefault() }
                            name="montoGrupalSolicitado" 
                            onChange={handleInputChange}/>

                            <input 
                            placeholder="Participante / Ciclos Totales Individual" 
                            className="form-control mt-2" 
                            type="number" 
                            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 ) && e.preventDefault() }
                            name="participanteCiclosTotalesIndividual" 
                            onChange={handleInputChange}/>

                            <input 
                            placeholder="Participante / Oferta / cambioMonto" 
                            className="form-control mt-2" 
                            type="number" 
                            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 ) && e.preventDefault() }
                            name="participanteOfertacambioMonto" 
                            onChange={handleInputChange}/>

                            <div class="input-group-prepend">
                                <select 
                                    class="custom-select form-control mt-2" 
                                    id="inputGroupSelect01"
                                    name="regionSede" 
                                    onChange={handleInputChange}>
                                    <option selected>Región Sede</option>
                                    <option value="SUR">SUR</option>
                                    <option value="NACIONAL">NACIONAL</option>
                                </select>
                            </div>

                            <div class="input-group-prepend">
                                <select 
                                    class="custom-select form-control mt-2" 
                                    id="inputGroupSelect01"
                                    name="participanteOfertamarcaAtraccionValida" 
                                    onChange={handleInputChange}>
                                    <option selected>Participante / Oferta Marca / Atraccion Valida</option>
                                    <option value="S">S</option>
                                    <option value="N">N</option>
                                </select>
                            </div>

                            <div class="input-group-prepend">
                                <select 
                                    class="custom-select form-control mt-2" 
                                    id="inputGroupSelect01"
                                    name="productoGrupaltipoModeloPrecio" 
                                    onChange={handleInputChange}>
                                    <option selected>ProductoGrupal / Tipo Modelo Precio</option>
                                    <option value="GRUPAL 1">GRUPAL 1</option>
                                    <option value="GRUPAL 2">GRUPAL 2</option>
                                    <option value="INDIVIDUAL 1">INDIVIDUAL 1</option>
                                </select>
                            </div>

                            <div class="input-group-prepend">
                                <select 
                                    class="custom-select form-control mt-2" 
                                    id="inputGroupSelect01"
                                    name="idProductoSeleccionadoVentas" 
                                    onChange={handleInputChange}>
                                    <option selected>Id Producto Seleccionado Ventas</option>
                                    <option value="C_GRUPAL_CM">C_GRUPAL_CM</option>
                                    <option value="C_GRUPAL_CCR">C_GRUPAL_CCR</option>
                                    <option value="C_IND_CI">C_IND_CI</option>
                                    <option value="C_IND_VCD">C_IND_VCD</option>
                                </select>
                            </div>

                        </form>
                    </Fragment>
                </MDBCardText>
            </MDBCardBody>
            </MDBCard>
        </div>

        <div class="col-6">    
            <MDBCard alignment='center' style={{ maxWidth: '500px' }}>
                <MDBCardHeader>
                    <div class="d-grid gap-2">
                        <MDBBtn onClick={() => {navigator.clipboard.writeText(JSON.stringify(datos.jsonInicial))}}
                        >COPIAR JSON MODIFICADO</MDBBtn>

                        <MDBBtn color='warning' onClick={sendPost}
                        >EJECUTAR JSON MODIFICADO</MDBBtn>
                    
                        <MDBBtn onClick={toggleShow} color='success'>VALIDAR RESPUESTA DE JSON</MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                            <MDBModalDialog>
                                <MDBModalContent>
                                    <MDBModalHeader>
                                        <MDBModalTitle>RESPUESTA DE JSON</MDBModalTitle>
                                        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                    </MDBModalHeader>
                                    <MDBModalFooter>
                                        <MDBBtn color='danger' onClick={toggleShow}>
                                        CERRAR
                                        </MDBBtn>
                                        <MDBBtn onClick={() => {navigator.clipboard.writeText(JSON.stringify(ejemplo))}}
                                        >COPIAR RESPUESTA
                                        </MDBBtn>
                                    </MDBModalFooter>
                                    <MDBModalBody>{JSON.stringify(ejemplo)}</MDBModalBody>
                                </MDBModalContent>
                            </MDBModalDialog>
                            </MDBModal>
                    </div>
                </MDBCardHeader>

                <div class="row pt-3">
                    <div class="col-12">
                        <MDBTable>
                            <MDBTableHead dark>
                                <tr>
                                    <th scope='col'>Nombre de nodo</th>
                                    <th scope='col'>Valor de nodo</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <th scope='row'>Tasa Bau</th>
                                    <td>{respTasaBau}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Tasa Atracción Completa</th>
                                    <td>Pendiente</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Tasa Completa</th>
                                    <td>{respTasaCompleta}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Tipo Modelo Precio</th>
                                    <td>{respTipoModeloPrecio}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Tipo Tasa Asignada</th>
                                    <td>{respTipoTasaAsignada}</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>         
                    </div>
                </div>
            </MDBCard>
        </div>
    </div>

  );
}