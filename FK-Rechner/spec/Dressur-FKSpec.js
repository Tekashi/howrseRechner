describe("Dressur-FK", function () {

    it("Gesamt-GP: 2322.93, Dressur-GP: 582.24, Dressur-FK: 176.77, beste Disziplin, RSZ: 0.25, mit 20 WF und WdJ, wird nach Dressur gestrandet, noch nicht bespielt", function () {
        var dressurFKendErgebnis = dressurFK(2322.93, 582.24, 176.77, true, 0.25, gesamtReitstunden(true, 20), true, false);
        expect(dressurFKendErgebnis).toBe(916.33);
    });

    it("Test 2", function () {
        var dressurFKendErgebnis = dressurFK(9234.44, 1044.42, 305.93, false, 0.25, gesamtReitstunden(false, 0), false, true);
        expect(dressurFKendErgebnis).toBe(1350.35);

    });


    it("Test 3 (beste Disziplin, ohne SMGs, wird nicht gestrandet", function () {
        var dressurFKendErgebnis = dressurFK(9234.44, 1044.42, 305.93, true, 0.25, gesamtReitstunden(false, 0), false, true);
        expect(dressurFKendErgebnis).toBe(1385.1);

    });


it("beste Disziplin, ohne SMGs, wird gestrandet", function () {
        var dressurFKendErgebnis = dressurFK(9234.44, 1044.42, 305.93, true, 0.25, gesamtReitstunden(false, 0), true, true);
        expect(dressurFKendErgebnis).toBe(1615.96);

    });


it("beste Disziplin, MIT SMGs, wird gestrandet", function () {
        var dressurFKendErgebnis = dressurFK(9234.44, 1044.42, 305.93, true, 0.25, gesamtReitstunden(true, 20), true, true);
        expect(dressurFKendErgebnis).toBe(1670.46);

    });


});