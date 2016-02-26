$(document).ready(function(){

console.log("slick_card.js");
$('#card_view_container').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 5,
  responsive: [
    // {
    //   breakpoint: 1921,
    //   settings: {
    //     slidesToShow: 10,
    //     slidesToScroll: 10
    //   }
    // },
    {
      breakpoint: 1081,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8
      }
    },
    {
      breakpoint: 1021,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
});

$('#edit_card_view_container').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,

});

var content = [
  { title: 'Abbadon' },
  { title: 'Alchemist' },
  { title: 'Axe' },
  { title: 'Anti-mage' },
  { title: 'Batrider' },
  { title: 'Beastmaster' },
  { title: 'BloodSeeker' },
  { title: 'Bounty Hunter' },
  { title: 'Brewmaster' },
  { title: 'Bristleback' },
  { title: 'Broodmother' },
  { title: 'Centaur Warrunner' },
  { title: 'Chaos Knight' },
  { title: 'Chen' },
  { title: 'Clinkz' },
  { title: 'Clockwerk' },
  { title: 'Crystal Maiden' },
  { title: 'Dark Seer' },
  { title: 'Dazzle' },
  { title: 'Death Prophet' },
  { title: 'Disruptor' },
  { title: 'Doom' },
  { title: 'Dragon Knight' },
  { title: 'Drow Ranger' },
  { title: 'Earthshaker' },
  { title: 'Earth Spirit' },
  { title: 'Elder Titan' },
  { title: 'Ember Spirit' },
  { title: 'Enchantress' },
  { title: 'Faceless Void' },
  { title: 'Gyrocopter' },
  { title: 'Huskar' },
  { title: 'Invoker' },
  { title: 'Juggernaut' },
  { title: 'Keeper Of the Light' },
  { title: 'Kunkka' },
  { title: 'Legion Commander' },
  { title: 'Leshrac' },
  { title: 'Lich' },
  { title: 'LifeStealer' },
  { title: 'Lina' },
  { title: 'Lion' },
  { title: 'Lone Druid' },
  { title: 'Luna' },
  { title: 'Lycan' },
  { title: 'Magnus' },
  { title: 'Medusa' },
  { title: 'Meepo' },
  { title: 'Mirana' },
  { title: 'Morphling' },
  { title: 'Naga Siren' },
  { title: 'Natures Prophet' },
  { title: 'Necrophos' },
  { title: 'Nyx Assasin' },
  { title: 'Ogre Magi' },
  { title: 'Omniknight' },
  { title: 'Outworld Devourer' },
  { title: 'Phantom Assasin' },
  { title: 'Phantom Lancer' },
  { title: 'Puck' },
  { title: 'Pudge' },
  { title: 'Pugna' },
  { title: 'Queen of Pain' },
  { title: 'Razor' },
  { title: 'Riki' },
  { title: 'Rubick' },
  { title: 'Sand King' },
  { title: 'Shadow Demon' },
  { title: 'Shadow Shaman' },
  { title: 'Silencer' },
  { title: 'Skywrath' },
  { title: 'Slardar' },
  { title: 'Slark' },
  { title: 'Sniper' },
  { title: 'Spectre' },
  { title: 'Spirit Breaker' },
  { title: 'Storm Spirit' },
  { title: 'Sven' },
  { title: 'Templar Assasin' },
  { title: 'Terrorblade' },
  { title: 'Tidehunter' },
  { title: 'Timbersaw' },
  { title: 'Tiny' },
  { title: 'Treant Protector' },
  { title: 'Tusk' },
  { title: 'Ursa' },
  { title: 'Vengeful Spirit' },
  { title: 'Venomancer' },
  { title: 'Warlock' },
  { title: 'Weaver' },
  { title: 'Windranger' },
  { title: 'Witch Doctor' },
  { title: 'Wraith King' }
];

// $('.ui.search')
//   .search({
//     source: content
//   })
// ;

});