/*

 Gesamt-GP:
 Dressur-GP:
 Dressur-FK:
 Ist Dressur eine der besten zwei Disziplinen?
 RS-Zuwachs:
 Wird WdJ gegeben?
 Werden WF gegeben?
 Wird auf Dressur gestrandet?
 Bereits bespielt?


 dressurGP + dressurFK
 if dressur eine der zwei besten disziplinen
 rs-zuwachs * gesamtReitstunden
 if nach dressur gestandet
 dressur-fk + gesamt-gp * 0.025

 if !bespielt
 dressur +10



 */


function dressurFK(gp, dressurGP, dressurFK, besteDisziplin, rsz, gesamtReitstunden, gestrandet, bespielt) {

    var dressurFK1;

    if (besteDisziplin) {
        dressurFK1 = dressurGP + dressurFK + rsz * gesamtReitstunden;
    }
    else {
        dressurFK1 = dressurGP + dressurFK;
    }

    if (gestrandet && bespielt) {
        return runde(gp * 0.025 + dressurFK1);
    }
    if (gestrandet && !bespielt) {
        return runde(gp * 0.025 + dressurFK1 + 10);
    }
    if (!gestrandet && !bespielt) {
        return runde(dressurFK1 + 10);
    }
    if (!gestrandet && bespielt) {
        return runde(dressurFK1);
    }


}


