function afk (gpVater, gpMutter, blupVater, blupMutter, at) {
    var afk1 = ((gpVater + gpMutter) * (blupVater + blupMutter)) / 2000;

    if (afk1 < 0) {
        afk1 = 0;
    }
    var afkMax = runde(afk1 * 1.04);
    var afkMin = runde(afk1 * 0.96);

    var afkMinAT = runde(afkMin * 1.5);
    var afkMaxAT = runde(afkMax * 1.5);

    if(at) {
        return {afkMin:afkMinAT, afkMax:afkMaxAT};
    }
    return {afkMin:afkMin, afkMax:afkMax};
}
