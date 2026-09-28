'use strict';

const documentsHost = 'https://portal.bbva.mx/egobnomina/doc';
const personalLoanImmediateSampleUrl = `${documentsHost}/5_Prestamo_Personal_Inmediato.pdf`;
const loanSamples = {
  PPI01: personalLoanImmediateSampleUrl,
  PPI02: personalLoanImmediateSampleUrl,
  PPI03: `${documentsHost}/4_Crediton_Nomina_sin_seguro.pdf`,
  PPI04: personalLoanImmediateSampleUrl,
  NOM01: `${documentsHost}/2_Crediton_Nomina_con_seguro_de_vida_y_desempleo.pdf`,
  NOM02: `${documentsHost}/1_Crediton_Nomina_con_seguro_de_vida.pdf`,
  MAG01: `${documentsHost}/3_Crediton_Nomina_magisterial.pdf`
};

module.exports = Object.assign({}, loanSamples, {
  PBCCMPPI01: loanSamples.PPI01,
  PBCCMPPI02: loanSamples.PPI02,
  PBCCMPPI03: loanSamples.PPI03,
  PBCCMPPI04: loanSamples.PPI04,
  PBCCMNOM01: loanSamples.NOM01,
  PBCCMNOM02: loanSamples.NOM02,
  PBCCMMAG01: loanSamples.MAG01
});
