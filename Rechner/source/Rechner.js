/*
 --Eingabefelder--
 GP:
 AFK:
 RSZ:
 WdJ: ja/nein
 Anzahl WF
 bereits bespielt: ja/nein


 Rechnen: gp + afk + rsz * anzahlRS (if: bespielt: nein -> + 60)

 Anzahl RS: 23 * (if: WdJ -> 12 // else -> 6) + 1 (if: WF -> wf * (if: WdJ * 4 // else * 2))

*/

/*
 End-FK:
 function (bespielt) {
 return GP + AFK + RSZ * reitstunden * 2 + 60;
 }
 return GP + AFK + RSZ * reitstunden * 2;

*/



function gesamtReitstunden(wdj, wf) {
    var reitstundenOhneWf = 23 * reitstundenImJahr(wdj) + 1;

    if (!wf) {
        return reitstundenOhneWf;
    }

    if (wdj && wf) {
        return reitstundenOhneWf + wf * 4;
    }

    if (!wdj && wf) {
        return reitstundenOhneWf + wf * 2;
    }
}


function reitstundenImJahr(wdj) {
    if (wdj) {
        return 12;
    }
    return 6;
}


function endFK (gp, afk, rsz, gesamtReitstunden, bespielt) {
    if (!bespielt) {
        return gp + afk + rsz * gesamtReitstunden + 60;
    }
    return gp + afk + rsz * gesamtReitstunden;

}
