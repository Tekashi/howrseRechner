describe("AFK-Rechner", function () {

    it("Gp Vater: 2300, GP Mutter: 2300, BLUP Vater: 100, BLUP Mutter: 100", function () {
        var afk1 = afk(2300, 2300, 100, 100, false);
        expect(afk1.afkMin).toBeGreaterThan(1);
        expect(afk1.afkMax).toBeLessThan(478.41);

    });

    it("GP Vater: 350, GP Mutter: 2400, BLUP Vater: -90, BLUP Mutter: 100", function () {
        var afk1 = afk(350, 2300, -90, 100, false);
        expect(afk1.afkMin).toBe(12.72);
        expect(afk1.afkMax).toBe(13.78);
    });

    it("GP Vater: 350, GP Mutter: 350, BLUP Vater: -90, BLUP Mutter: -90", function () {
        var afk1 = afk(350, 350, -90, -90, false);
        expect(afk1.afkMin).toBe(0);
        expect(afk1.afkMax).toBe(0);
    });

    it("GP Vater: 2400, GP Mutter: 2400, BLUP Vater: 70, BLUP Mutter: 70", function () {
        var afk1 = afk(2400, 2400, 70, 70, false);
        expect(afk1.afkMin).toBe(322.56);
        expect(afk1.afkMax).toBe(349.44);

    });


    it("GP Vater: 2320, GP Mutter: 2300, BLUP Vater: 100, BLUP Mutter: 100, mit AT", function () {
            var afk1 = afk(2320, 2300, 100, 100, true);
            expect(afk1.afkMin).toBe(665.28);
            expect(afk1.afkMax).toBe(720.72);

    });


    it("GP Vater: 295.34, GP Mutter: 2047.42, BLUP Vater: -89.43, BLUP Mutter: -50.25, mit AT", function () {
            var afk1 = afk(295.34, 2047.42, -89.43, -50.25, true);
            expect(afk1.afkMin).toBe(0);
            expect(afk1.afkMax).toBe(0);

    });

});