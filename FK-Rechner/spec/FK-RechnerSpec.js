describe("FK-Rechner", function () {

    describe("Reitstunden im Jahr", function () {

        it("mit WdJ kann man 12 Reitstunden im Jahr gehen", function () {
            var reitstundenImJahr1 = reitstundenImJahr(true);
            expect(reitstundenImJahr1).toBe(12);

        });


        it("ohne WdJ kann man 6 Reitstunden im Jahr gehen", function () {
            var reitstundenImJahr1 = reitstundenImJahr(false);
            expect(reitstundenImJahr1).toBe(6);

        });


    });

    describe("gesamte Reitstunden", function () {

        it("ohne WdJ und ohne WF kann man 139 Reitstunden gehen", function () {
            var reitstunden1 = gesamtReitstunden(false, 0);
            expect(reitstunden1).toBe(139);

        });


        it("ohne WdJ und mit 17 WF kann man 173 Reitstunden gehen", function () {
            var reitstunden1 = gesamtReitstunden(false, 17);
            expect(reitstunden1).toBe(173);

        });


        it("mit WdJ und ohne WF kann man 277 Reitstunden gehen", function () {
            var reitstunden1 = gesamtReitstunden(true, 0);
            expect(reitstunden1).toBe(277);

        });


        it("mit WdJ und 13 WF kann man 329 Reitstunden gehen", function () {
            var reitstunden1 = gesamtReitstunden(true, 13);
            expect(reitstunden1).toBe(329);

        });


        it("mit WdJ und 20 WF kann man 357 Reitstunden gehen", function () {
            var reitstunden1 = gesamtReitstunden(true, 20);
            expect(reitstunden1).toBe(357);

        });


    });


    describe("End-FK", function () {

        it("mit einem GP von 350, AFK von 0, WdJ und 20 WF bekommt man (unbespielt) bei einem RSZ von 0.25", function () {
            var endfk = endFK(350, 0, 0.25, gesamtReitstunden(true, 20), false);
            expect(endfk).toBe(588.50);

        });


        it("GP: 2300, AFK, 700, WdJ, 15 WF, unbespielt,  RSZ: 0.244, bereits bespielt", function () {
            var endfk = endFK(2300, 700, 0.244, gesamtReitstunden(true, 15), true);
            expect(endfk).toBe(3164.46);
        });
    });

});
