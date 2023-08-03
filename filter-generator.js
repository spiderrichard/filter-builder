function generatefilter() {
    
    //Rating
    var selectedItems = document.getElementById("displayFilter");
    var includeFourStar = document.getElementById("includeFourStar");
    var excludeFourStar = document.getElementById("excludeFourStar");
    var includeThreeStar = document.getElementById("includeThreeStar");
    var excludeThreeStar = document.getElementById("excludeThreeStar");
    var includeTwoStar = document.getElementById("includeTwoStar");
    var excludeTwoStar = document.getElementById("excludeTwoStar");
    var includeOneStar = document.getElementById("includeOneStar");
    var excludeOneStar = document.getElementById("excludeOneStar");
    var includeZeroStar = document.getElementById("includeZeroStar");
    var excluedZeroStar = document.getElementById("excluedZeroStar");
    
    //Characteristic
    var includeCanEvolve = document.getElementById("includeCanEvolve");
    var excludeCanEvolve = document.getElementById("excludeCanEvolve");
    var includeCanMegaEvolve = document.getElementById("includeCanMegaEvolve");
    var excludeCanMegaEvolve = document.getElementById("excludeCanMegaEvolve");
    var includeEggExclusive = document.getElementById("includeEggExclusive");
    var excludeEggExclusive = document.getElementById("excludeEggExclusive");
    var includeGenderFemale = document.getElementById("includeGenderFemale");
    var excludeGenderFemale = document.getElementById("excludeGenderFemale");
    var includeGenderMale = document.getElementById("includeGenderMale");
    var excludeGenderMale = document.getElementById("excludeGenderMale");
    var includeHatched = document.getElementById("includeHatched");
    var excludeHatched = document.getElementById("excludeHatched");
    var includeLucky = document.getElementById("includeLucky");
    var excludeLucky = document.getElementById("excludeLucky");
    var includeLegendary = document.getElementById("includeLegendary");
    var excludeLegendary = document.getElementById("excludeLegendary");
    var includeMythical = document.getElementById("includeMythical");
    var excludeMythical = document.getElementById("excludeMythical");
    var includePurified = document.getElementById("includePurified");
    var excludePurified = document.getElementById("excludePurified");
    var includeShadow = document.getElementById("includeShadow");
    var excludeShadow = document.getElementById("excludeShadow");
    var includeShiny = document.getElementById("includeShiny");
    var excludeShiny = document.getElementById("excludeShiny");
    var includeCostume = document.getElementById("includeCostume");
    var excludeCostume = document.getElementById("excludeCostume");
    var includeTraded = document.getElementById("includeTraded");
    var excludeTraded = document.getElementById("excludeTraded");
    var includeUltraBeasts = document.getElementById("includeUltraBeasts");
    var excludeUltraBeasts = document.getElementById("excludeUltraBeasts");

    //Type
    var includeNormal = document.getElementById("includeNormal");
    var excludeNormal = document.getElementById("excludeNormal");
    var includeFire = document.getElementById("includeFire");
    var excludeFire = document.getElementById("excludeFire");
    var includeWater = document.getElementById("includeWater");
    var excludeWater = document.getElementById("excludeWater");
    var includeGrass = document.getElementById("includeGrass");
    var excludeGrass = document.getElementById("excludeGrass");
    var includeElectric = document.getElementById("includeElectric");
    var excludeElectric = document.getElementById("excludeElectric");
    var includeIce = document.getElementById("includeIce");
    var excludeIce = document.getElementById("excludeIce");
    var includeFighting = document.getElementById("includeFighting");
    var excludeFighting = document.getElementById("excludeFighting");
    var includePoison = document.getElementById("includePoison");
    var excludePoison = document.getElementById("excludePoison");
    var includeGround = document.getElementById("includeGround");
    var excludeGround = document.getElementById("excludeGround");
    var includeFlying = document.getElementById("includeFlying");
    var excludeFlying = document.getElementById("excludeFlying");
    var includePsychic = document.getElementById("includePsychic");
    var excludePsychic = document.getElementById("excludePsychic");
    var includeBug = document.getElementById("includeBug");
    var excludeBug = document.getElementById("excludeBug");
    var includeRock = document.getElementById("includeRock");
    var excludeRock = document.getElementById("excludeRock");
    var includeGhost = document.getElementById("includeGhost");
    var excludeGhost = document.getElementById("excludeGhost");
    var includeDark = document.getElementById("includeDark");
    var excludeDark = document.getElementById("excludeDark");
    var includeDragon = document.getElementById("includeDragon");
    var excludeDragon = document.getElementById("excludeDragon");
    var includeSteel = document.getElementById("includeSteel");
    var excludeSteel = document.getElementById("excludeSteel");
    var includeFairy = document.getElementById("includeFairy");
    var excludeFairy = document.getElementById("excludeFairy");
   
    //Region
    var includeKanto = document.getElementById("includeKanto");
    var excludeKanto = document.getElementById("excludeKanto");
    var includeJohto = document.getElementById("includeJohto");
    var excludeJohto = document.getElementById("excludeJohto");
    var includeHoenn = document.getElementById("includeHoenn");
    var excludeHoenn = document.getElementById("excludeHoenn");
    var includeSinnoh = document.getElementById("includeSinnoh");
    var excludeSinnoh = document.getElementById("excludeSinnoh");
    var includeUnova = document.getElementById("includeUnova");
    var excludeUnova = document.getElementById("excludeUnova");
    var includeKalos = document.getElementById("includeKalos");
    var excludeKalos = document.getElementById("excludeKalos");
    var includeAlola = document.getElementById("includeAlola");
    var excludeAlola = document.getElementById("excludeAlola");
    var includeGalar = document.getElementById("includeGalar");
    var excludeGalar = document.getElementById("excludeGalar");
    var includeHisui = document.getElementById("includeHisui");
    var excludeHisui = document.getElementById("excludeHisui");
    var includePaldea = document.getElementById("includePaldea");
    var excludePaldea = document.getElementById("excludePaldea");

    //Move Type
    var includeNormalMove = document.getElementById("includeNormalMove");
    var excludeNormalMove = document.getElementById("excludeNormalMove");
    var includeFireMove = document.getElementById("includeFireMove");
    var excludeFireMove = document.getElementById("excludeFireMove");
    var includeWaterMove = document.getElementById("includeWaterMove");
    var excludeWaterMove = document.getElementById("excludeWaterMove");
    var includeWaterMove = document.getElementById("includeWaterMove");
    var includeGrassMove = document.getElementById("includeGrassMove");
    var excludeGrassMove = document.getElementById("excludeGrassMove");
    var includeElectricMove = document.getElementById("includeElectricMove");
    var excludeElectricMove = document.getElementById("excludeElectricMove");
    var includeIceMove = document.getElementById("includeIceMove");
    var excludeIceMove = document.getElementById("excludeIceMove");
    var includeFightingMove = document.getElementById("includeFightingMove");
    var excludeFightingMove = document.getElementById("excludeFightingMove");
    var includePoisonMove = document.getElementById("includePoisonMove");
    var excludePoisonMove = document.getElementById("excludePoisonMove");
    var includeGroundMove = document.getElementById("includeGroundMove");
    var excludeGroundMove = document.getElementById("excludeGroundMove");
    var includeFlyingMove = document.getElementById("includeFlyingMove");
    var excludeFlyingMove = document.getElementById("excludeFlyingMove");
    var includePsychicMove = document.getElementById("includePsychicMove");
    var excludePsychicMove = document.getElementById("excludePsychicMove");
    var includeBugMove = document.getElementById("includeBugMove");
    var excludeBugMove = document.getElementById("excludeBugMove");
    var includeRockMove = document.getElementById("includeRockMove");
    var excludeRockMove = document.getElementById("excludeRockMove");
    var includeGhostMove = document.getElementById("includeGhostMove");
    var excludeGhostMove = document.getElementById("excludeGhostMove");
    var includeDarkMove = document.getElementById("includeDarkMove");
    var excludeDarkMove = document.getElementById("excludeDarkMove");
    var includeDragonMove = document.getElementById("includeDragonMove");
    var excludeDragonMove = document.getElementById("excludeDragonMove");
    var includeFairyMove = document.getElementById("includeFairyMove");
    var excludeFairyMove = document.getElementById("excludeFairyMove");


    //Distance
    var include1000plus = document.getElementById("include1000plus");
    var exclude1000plus = document.getElementById("exclude1000plus");
    var include2500plus = document.getElementById("include2500plus");
    var exclude2500plus = document.getElementById("exclude2500plus");
    var include5000plus = document.getElementById("include5000plus");
    var exclude5000plus = document.getElementById("exclude5000plus");
    var include7500plus = document.getElementById("include7500plus");
    var exclude7500plus = document.getElementById("exclude7500plus");
    var include10000plus = document.getElementById("include10000plus");
    var exclude10000plus = document.getElementById("exclude10000plus");

    //Buddy Level
    var includebuddy0 = document.getElementById("includebuddy0");
    var excludebuddy0 = document.getElementById("excludebuddy0");
    var includebuddy1 = document.getElementById("includebuddy1");
    var excludebuddy1 = document.getElementById("excludebuddy1");
    var includebuddy2 = document.getElementById("includebuddy2");
    var excludebuddy2 = document.getElementById("excludebuddy2");
    var includebuddy3 = document.getElementById("includebuddy3");
    var excludebuddy3 = document.getElementById("excludebuddy3");
    var includebuddy4 = document.getElementById("includebuddy4");
    var excludebuddy4 = document.getElementById("excludebuddy4");
    var includebuddy5 = document.getElementById("includebuddy5");
    var excludebuddy5 = document.getElementById("excludebuddy5");

    //Age
    var include1day = document.getElementById("include1day");
    var exclude1day = document.getElementById("exclude1day");
    var include1week = document.getElementById("include1week");
    var exclude1week = document.getElementById("exclude1week");
    var include1month = document.getElementById("include1month");
    var exclude1month = document.getElementById("exclude1month");
    var include1year = document.getElementById("include1year");
    var exclude1year = document.getElementById("exclude1year");


    selectedItems.innerHTML = "";

    //Rating
    if (includeFourStar.checked) {
        selectedItems.innerHTML += includeFourStar.value;
    }
    if (excludeFourStar.checked) {
        selectedItems.innerHTML += excludeFourStar.value;
    }
    if (includeThreeStar.checked) {
        selectedItems.innerHTML += includeThreeStar.value;
    }
    if (excludeThreeStar.checked) {
        selectedItems.innerHTML += excludeThreeStar.value;
    }
    if (includeTwoStar.checked) {
        selectedItems.innerHTML += includeTwoStar.value;
    }
    if (excludeTwoStar.checked) {
        selectedItems.innerHTML += excludeTwoStar.value;
    }
    if (includeOneStar.checked) {
        selectedItems.innerHTML += includeOneStar.value;
    }
    if (excludeOneStar.checked) {
        selectedItems.innerHTML += excludeOneStar.value;
    }
    if (includeZeroStar.checked) {
        selectedItems.innerHTML += includeZeroStar.value;
    }
    if (excluedZeroStar.checked) {
        selectedItems.innerHTML += excluedZeroStar.value;
    }

    //Characteristic
    if (includeCanEvolve.checked) {
        selectedItems.innerHTML += includeCanEvolve.value;
    }
    if (excludeCanEvolve.checked) {
        selectedItems.innerHTML += excludeCanEvolve.value;
    }
    if (includeCanMegaEvolve.checked) {
        selectedItems.innerHTML += includeCanMegaEvolve.value;
    }
    if (excludeCanMegaEvolve.checked) {
        selectedItems.innerHTML += excludeCanMegaEvolve.value;
    }
    if (includeEggExclusive.checked) {
        selectedItems.innerHTML += includeEggExclusive.value;
    }
    if (excludeEggExclusive.checked) {
        selectedItems.innerHTML += excludeEggExclusive.value;
    }
    if (includeGenderFemale.checked) {
        selectedItems.innerHTML += includeGenderFemale.value;
    }
    if (excludeGenderFemale.checked) {
        selectedItems.innerHTML += excludeGenderFemale.value;
    }
    if (includeGenderMale.checked) {
        selectedItems.innerHTML += includeGenderMale.value;
    }
    if (excludeGenderMale.checked) {
        selectedItems.innerHTML += excludeGenderMale.value;
    }
    if (includeHatched.checked) {
        selectedItems.innerHTML += includeHatched.value;
    }
    if (excludeHatched.checked) {
        selectedItems.innerHTML += excludeHatched.value;
    }
    if (includeLucky.checked) {
        selectedItems.innerHTML += includeLucky.value;
    }
    if (excludeLucky.checked) {
        selectedItems.innerHTML += excludeLucky.value;
    }
    if (includeLegendary.checked) {
        selectedItems.innerHTML += includeLegendary.value;
    }
    if (excludeLegendary.checked) {
        selectedItems.innerHTML += excludeLegendary.value;
    }
    if (includeMythical.checked) {
        selectedItems.innerHTML += includeMythical.value;
    }
    if (excludeMythical.checked) {
        selectedItems.innerHTML += excludeMythical.value;
    }
    if (includePurified.checked) {
        selectedItems.innerHTML += includePurified.value;
    }
    if (excludePurified.checked) {
        selectedItems.innerHTML += excludePurified.value;
    }
    if (includeShadow.checked) {
        selectedItems.innerHTML += includeShadow.value;
    }
    if (excludeShadow.checked) {
        selectedItems.innerHTML += excludeShadow.value;
    }
    if (includeShiny.checked) {
        selectedItems.innerHTML += includeShiny.value;
    }
    if (excludeShiny.checked) {
        selectedItems.innerHTML += excludeShiny.value;
    }
    if (includeCostume.checked) {
        selectedItems.innerHTML += includeCostume.value;
    }
    if (excludeCostume.checked) {
        selectedItems.innerHTML += excludeCostume.value;
    }
    if (includeTraded.checked) {
        selectedItems.innerHTML += includeTraded.value;
    }
    if (excludeTraded.checked) {
        selectedItems.innerHTML += excludeTraded.value;
    }
    if (includeUltraBeasts.checked) {
        selectedItems.innerHTML += includeUltraBeasts.value;
    }
    if (excludeUltraBeasts.checked) {
        selectedItems.innerHTML += excludeUltraBeasts.value;
    }

    //Type
    if (includeNormal.checked) {
        selectedItems.innerHTML += includeNormal.value;
    }
    if (excludeNormal.checked) {
        selectedItems.innerHTML += excludeNormal.value;
    }
    if (includeFire.checked) {
        selectedItems.innerHTML += includeFire.value;
    }
    if (excludeFire.checked) {
        selectedItems.innerHTML += excludeFire.value;
    }
    if (includeWater.checked) {
        selectedItems.innerHTML += includeWater.value;
    }
    if (excludeWater.checked) {
        selectedItems.innerHTML += excludeWater.value;
    }
    if (includeGrass.checked) {
        selectedItems.innerHTML += includeGrass.value;
    }
    if (excludeGrass.checked) {
        selectedItems.innerHTML += excludeGrass.value;
    }
    if (includeElectric.checked) {
        selectedItems.innerHTML += includeElectric.value;
    }
    if (excludeElectric.checked) {
        selectedItems.innerHTML += excludeElectric.value;
    }
    if (includeIce.checked) {
        selectedItems.innerHTML += includeIce.value;
    }
    if (excludeIce.checked) {
        selectedItems.innerHTML += excludeIce.value;
    }
    if (includeFighting.checked) {
        selectedItems.innerHTML += includeFighting.value;
    }
    if (excludeFighting.checked) {
        selectedItems.innerHTML += excludeFighting.value;
    }
    if (includePoison.checked) {
        selectedItems.innerHTML += includePoison.value;
    }
    if (excludePoison.checked) {
        selectedItems.innerHTML += excludePoison.value;
    }
    if (includeGround.checked) {
        selectedItems.innerHTML += includeGround.value;
    }
    if (excludeGround.checked) {
        selectedItems.innerHTML += excludeGround.value;
    }
    if (includeFlying.checked) {
        selectedItems.innerHTML += includeFlying.value;
    }
    if (excludeFlying.checked) {
        selectedItems.innerHTML += excludeFlying.value;
    }
    if (includePsychic.checked) {
        selectedItems.innerHTML += includePsychic.value;
    }
    if (excludePsychic.checked) {
        selectedItems.innerHTML += excludePsychic.value;
    }
    if (includeBug.checked) {
        selectedItems.innerHTML += includeBug.value;
    }
    if (excludeBug.checked) {
        selectedItems.innerHTML += excludeBug.value;
    }
    if (includeRock.checked) {
        selectedItems.innerHTML += includeRock.value;
    }
    if (excludeRock.checked) {
        selectedItems.innerHTML += excludeRock.value;
    }
    if (includeGhost.checked) {
        selectedItems.innerHTML += includeGhost.value;
    }
    if (excludeGhost.checked) {
        selectedItems.innerHTML += excludeGhost.value;
    }
    if (includeDark.checked) {
        selectedItems.innerHTML += includeDark.value;
    }
    if (excludeDark.checked) {
        selectedItems.innerHTML += excludeDark.value;
    }
    if (includeDragon.checked) {
        selectedItems.innerHTML += includeDragon.value;
    }
    if (excludeDragon.checked) {
        selectedItems.innerHTML += excludeDragon.value;
    }
    if (includeSteel.checked) {
        selectedItems.innerHTML += includeSteel.value;
    }
    if (excludeSteel.checked) {
        selectedItems.innerHTML += excludeSteel.value;
    }
    if (includeFairy.checked) {
        selectedItems.innerHTML += includeFairy.value;
    }
    if (excludeFairy.checked) {
        selectedItems.innerHTML += excludeFairy.value;
    }

    //Move Type
    if (includeNormalMove.checked) {
        selectedItems.innerHTML += includeNormalMove.value;
    }
    if (excludeNormalMove.checked) {
        selectedItems.innerHTML += excludeNormalMove.value;
    }
    if (includeFireMove.checked) {
        selectedItems.innerHTML += includeFireMove.value;
    }
    if (excludeFireMove.checked) {
        selectedItems.innerHTML += excludeFireMove.value;
    }
    if (includeWaterMove.checked) {
        selectedItems.innerHTML += includeWaterMove.value;
    }
    if (excludeWaterMove.checked) {
        selectedItems.innerHTML += excludeWaterMove.value;
    }
    if (includeGrassMove.checked) {
        selectedItems.innerHTML += includeGrassMove.value;
    }
    if (excludeGrassMove.checked) {
        selectedItems.innerHTML += excludeGrassMove.value;
    }
    if (includeElectricMove.checked) {
        selectedItems.innerHTML += includeElectricMove.value;
    }
    if (excludeElectricMove.checked) {
        selectedItems.innerHTML += excludeElectricMove.value;
    }
    if (includeIceMove.checked) {
        selectedItems.innerHTML += includeIceMove.value;
    }
    if (excludeIceMove.checked) {
        selectedItems.innerHTML += excludeIceMove.value;
    }
    if (includeFightingMove.checked) {
        selectedItems.innerHTML += includeFightingMove.value;
    }
    if (excludeFightingMove.checked) {
        selectedItems.innerHTML += excludeFightingMove.value;
    }
    if (includePoisonMove.checked) {
        selectedItems.innerHTML += includePoisonMove.value;
    }
    if (excludePoisonMove.checked) {
        selectedItems.innerHTML += excludePoisonMove.value;
    }
    if (includeGroundMove.checked) {
        selectedItems.innerHTML += includeGroundMove.value;
    }
    if (excludeGroundMove.checked) {
        selectedItems.innerHTML += excludeGroundMove.value;
    }
    if (includeFlyingMove.checked) {
        selectedItems.innerHTML += includeFlyingMove.value;
    }
    if (excludeFlyingMove.checked) {
        selectedItems.innerHTML += excludeFlyingMove.value;
    }
    if (includePsychicMove.checked) {
        selectedItems.innerHTML += includePsychicMove.value;
    }
    if (excludePsychicMove.checked) {
        selectedItems.innerHTML += excludePsychicMove.value;
    }
    if (includeBugMove.checked) {
        selectedItems.innerHTML += includeBugMove.value;
    }
    if (excludeBugMove.checked) {
        selectedItems.innerHTML += excludeBugMove.value;
    }
    if (includeRockMove.checked) {
        selectedItems.innerHTML += includeRockMove.value;
    }
    if (excludeRockMove.checked) {
        selectedItems.innerHTML += excludeRockMove.value;
    }
    if (includeGhostMove.checked) {
        selectedItems.innerHTML += includeGhostMove.value;
    }
    if (excludeGhostMove.checked) {
        selectedItems.innerHTML += excludeGhostMove.value;
    }
    if (includeDarkMove.checked) {
        selectedItems.innerHTML += includeDarkMove.value;
    }
    if (excludeDarkMove.checked) {
        selectedItems.innerHTML += excludeDarkMove.value;
    }
    if (includeDragonMove.checked) {
        selectedItems.innerHTML += includeDragonMove.value;
    }
    if (excludeDragonMove.checked) {
        selectedItems.innerHTML += excludeDragonMove.value;
    }
    if (includeFairyMove.checked) {
        selectedItems.innerHTML += includeFairyMove.value;
    }
    if (excludeFairyMove.checked) {
        selectedItems.innerHTML += excludeFairyMove.value;
    }
    

    //Region
    if (includeKanto.checked) {
        selectedItems.innerHTML += includeKanto.value;
    }
    if (excludeKanto.checked) {
        selectedItems.innerHTML += excludeKanto.value;
    }
    if (includeJohto.checked) {
        selectedItems.innerHTML += includeJohto.value;
    }
    if (excludeJohto.checked) {
        selectedItems.innerHTML += excludeJohto.value;
    }
    if (includeHoenn.checked) {
        selectedItems.innerHTML += includeHoenn.value;
    }
    if (excludeHoenn.checked) {
        selectedItems.innerHTML += excludeHoenn.value;
    }
    if (includeSinnoh.checked) {
        selectedItems.innerHTML += includeSinnoh.value;
    }
    if (excludeSinnoh.checked) {
        selectedItems.innerHTML += excludeSinnoh.value;
    }
    if (includeUnova.checked) {
        selectedItems.innerHTML += includeUnova.value;
    }
    if (excludeUnova.checked) {
        selectedItems.innerHTML += excludeUnova.value;
    }
    if (includeKalos.checked) {
        selectedItems.innerHTML += includeKalos.value;
    }
    if (excludeKalos.checked) {
        selectedItems.innerHTML += excludeKalos.value;
    }
    if (includeAlola.checked) {
        selectedItems.innerHTML += includeAlola.value;
    }
    if (excludeAlola.checked) {
        selectedItems.innerHTML += excludeAlola.value;
    }
    if (includeGalar.checked) {
        selectedItems.innerHTML += includeGalar.value;
    }
    if (excludeGalar.checked) {
        selectedItems.innerHTML += excludeGalar.value;
    }
    if (includeHisui.checked) {
        selectedItems.innerHTML += includeHisui.value;
    }
    if (excludeHisui.checked) {
        selectedItems.innerHTML += excludeHisui.value;
    }
    if (includePaldea.checked) {
        selectedItems.innerHTML += includePaldea.value;
    }
    if (excludePaldea.checked) {
        selectedItems.innerHTML += excludePaldea.value;
    }


    //Distance
    if (include1000plus.checked) {
        selectedItems.innerHTML += include1000plus.value;
    }
    if (exclude1000plus.checked) {
        selectedItems.innerHTML += exclude1000plus.value;
    }
    if (include2500plus.checked) {
        selectedItems.innerHTML += include2500plus.value;
    }
    if (exclude2500plus.checked) {
        selectedItems.innerHTML += exclude2500plus.value;
    }
    if (include5000plus.checked) {
        selectedItems.innerHTML += include5000plus.value;
    }
    if (exclude5000plus.checked) {
        selectedItems.innerHTML += exclude5000plus.value;
    }
    if (include7500plus.checked) {
        selectedItems.innerHTML += include7500plus.value;
    }
    if (exclude7500plus.checked) {
        selectedItems.innerHTML += exclude7500plus.value;
    }
    if (include10000plus.checked) {
        selectedItems.innerHTML += include10000plus.value;
    }
    if (exclude10000plus.checked) {
        selectedItems.innerHTML += exclude10000plus.value;
    }

    //Buddy Level
    if (includebuddy0.checked) {
        selectedItems.innerHTML += includebuddy0.value;
    }
    if (excludebuddy0.checked) {
        selectedItems.innerHTML += excludebuddy0.value;
    }
    if (includebuddy1.checked) {
        selectedItems.innerHTML += includebuddy1.value;
    }
    if (excludebuddy1.checked) {
        selectedItems.innerHTML += excludebuddy1.value;
    }
    if (includebuddy2.checked) {
        selectedItems.innerHTML += includebuddy2.value;
    }
    if (excludebuddy2.checked) {
        selectedItems.innerHTML += excludebuddy2.value;
    }
    if (includebuddy3.checked) {
        selectedItems.innerHTML += includebuddy3.value;
    }
    if (excludebuddy3.checked) {
        selectedItems.innerHTML += excludebuddy3.value;
    }
    if (includebuddy4.checked) {
        selectedItems.innerHTML += includebuddy4.value;
    }
    if (excludebuddy4.checked) {
        selectedItems.innerHTML += excludebuddy4.value;
    }
    if (includebuddy5.checked) {
        selectedItems.innerHTML += includebuddy5.value;
    }
    if (excludebuddy5.checked) {
        selectedItems.innerHTML += excludebuddy5.value;
    }

    //Age
    if (include1day.checked) {
        selectedItems.innerHTML += include1day.value;
    }
    if (exclude1day.checked) {
        selectedItems.innerHTML += exclude1day.value;
    }
    if (include1week.checked) {
        selectedItems.innerHTML += include1week.value;
    }
    if (exclude1week.checked) {
        selectedItems.innerHTML += exclude1week.value;
    }
    if (include1month.checked) {
        selectedItems.innerHTML += include1month.value;
    }
    if (exclude1month.checked) {
        selectedItems.innerHTML += exclude1month.value;
    }
    if (include1year.checked) {
        selectedItems.innerHTML += include1year.value;
    }
    if (exclude1year.checked) {
        selectedItems.innerHTML += exclude1year.value;
    }
}