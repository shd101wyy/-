$(document).ready(function(){
    window.slime1 = {
        hp: 10,
        damage: 4,
    };

    window.slime2 = {
        hp: 10,
        damage: 3,
    };

    window.slime3 = {
        hp: 10,
        damage: 4,
    };

    window.player = {
        hp: 30,
        mana: 20,
        skills: {
            "砍杀": {
                damage: 5,
                cd: 5
            },
            "治疗": {
                cd: 10
            }
        }
    };

    $hp = $("#hp");
    $mana = $("#mana");
    $砍杀 = $("#砍杀");
    $治疗 = $("#治疗");

    function slimeAttack(slime) {
        if (slime.hp <= 0) {
            return;
        }
        else {
            setTimeout(function() {
                if (slime.hp <= 0) {
                    return;
                }
                else {
                    player.hp -= slime.damage + parseInt(Math.random() + 0.5);
                    if (player.hp <= 0) {
                        // console.log("Game Over");
                        toastr.error("Game Over");
                    }
                    $hp.text("HP: " + player.hp);
                    slimeAttack(slime);
                }
            }, 8000);
        }
    }

    slimeAttack(slime1);
    slimeAttack(slime2);
    slimeAttack(slime3);

    $砍杀.addClass("attack-ready-anime");
    setTimeout(function(){
        $砍杀.addClass("skill-ready");
        $砍杀.removeClass("attack-ready-anime");
    }, 5000);
    $治疗.addClass("heal-ready-anime");
    setTimeout(function(){
        $治疗.addClass("skill-ready");
        $治疗.removeClass("heal-ready-anime");
    }, 12000);

    $("#砍杀").click(function() {
        $(".skill-selected").removeClass("skill-selected");
        $("#砍杀").addClass("skill-selected");
    });

    $("#治疗").click(function() {
        $(".skill-selected").removeClass("skill-selected");
        $("#治疗").addClass("skill-selected");
    });

    $("#me").click(function() {
        var skill_selected = $(".skill-selected");
        var skill_name = skill_selected.attr("name");
        var skill_ready = skill_selected.hasClass("skill-ready");
        if (!skill_ready) {
            toastr.warning("skill " + skill_name + " not ready");
        }
        else if (skill_name === "砍杀") {
            toastr.warning("你不能攻击自己");
        }
        else {
            player.hp += 5;
            $hp.text("HP: " + player.hp);
            toastr.success("治疗 +5");

            $治疗.removeClass("skill-ready");
            $治疗.addClass("heal-ready-anime");
            setTimeout(function(){
                $治疗.addClass("skill-ready");
                $治疗.removeClass("heal-ready-anime");
            }, 12000);
        }
    });

    $(".enemy").click(function (evt){
        evt.preventDefault();
        evt.stopPropagation();

        var skill_selected = $(".skill-selected");
        var skill_name = skill_selected.attr("name");
        var skill_ready = skill_selected.hasClass("skill-ready");
        if (!skill_ready) {
            toastr.warning("skill " + skill_name + " not ready");
        }
        else if (skill_name === "治疗") {
            toastr.warning("你不能治疗敌人");
        }
        else {
            var s = $(evt.target).attr("name");
            var slime = window[s];
            // console.log(slime);
            var damage = 4 + parseInt(Math.random() + 0.5);
            slime.hp -= damage;
            if (slime.hp <= 0) {
                $(evt.target).remove();
            }

            toastr.success("攻击 " + s + " Damage: " + damage + "   " + s + "剩余hp: " + slime.hp);

            $砍杀.removeClass("skill-ready");
            $砍杀.addClass("attack-ready-anime");
            setTimeout(function(){
                $砍杀.addClass("skill-ready");
                $砍杀.removeClass("attack-ready-anime");
            }, 5000);

        }
    });
});
