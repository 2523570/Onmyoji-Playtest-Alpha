const spellCatalog = {
  Fire: {
    attack: [
      { name: "Cinder Talisman", dice: "1d6", type: "attack" },
      { name: "Cinder Talisman", dice: "1d6", type: "attack" },

      { name: "Blazing Ofuda", dice: "2d6", type: "attack" },
      { name: "Blazing Ofuda", dice: "2d6", type: "attack" },

      { name: "Ritual of the Thousand Flames", dice: "3d6", type: "attack" }
    ],
    defense: [
      { name: "Scorching Seal", dice: "1d3", type: "defense" },
      { name: "Scorching Seal", dice: "1d3", type: "defense" },

      { name: "Rite of Burning Ash", dice: "2d3", type: "defense" },
      { name: "Rite of Burning Ash", dice: "2d3", type: "defense" }
    ]
  },

  Ice: {
    attack: [
      { name: "Frostbind Talisman", dice: "1d6", type: "attack" },
      { name: "Frostbind Talisman", dice: "1d6", type: "attack" },

      { name: "Freezing Ofuda", dice: "2d6", type: "attack" },
      { name: "Freezing Ofuda", dice: "2d6", type: "attack" },

      { name: "Heaven Frost Cataclysm", dice: "3d6", type: "attack" }
    ],
    defense: [
      { name: "Winter Seal", dice: "1d3", type: "defense" },
      { name: "Winter Seal", dice: "1d3", type: "defense" },

      { name: "Eternal Winter Rite", dice: "2d3", type: "defense" },
      { name: "Eternal Winter Rite", dice: "2d3", type: "defense" }
    ]
  },

  Wind: {
    attack: [
      { name: "Razorwind Talisman", dice: "1d6", type: "attack" },
      { name: "Razorwind Talisman", dice: "1d6", type: "attack" },

      { name: "Howling Ofuda", dice: "2d6", type: "attack" },
      { name: "Howling Ofuda", dice: "2d6", type: "attack" },

      { name: "Thousand Blade Cyclone", dice: "3d6", type: "attack" }
    ],
    defense: [
      { name: "Gale Seal", dice: "1d3", type: "defense" },
      { name: "Gale Seal", dice: "1d3", type: "defense" },

      { name: "Rite of the Unbound Tempest", dice: "2d3", type: "defense" },
      { name: "Rite of the Unbound Tempest", dice: "2d3", type: "defense" }
    ]
  },

  Lightning: {
    attack: [
      { name: "Stormcall Talisman", dice: "1d6", type: "attack" },
      { name: "Stormcall Talisman", dice: "1d6", type: "attack" },

      { name: "Storm-Touched Ofuda", dice: "2d6", type: "attack" },
      { name: "Storm-Touched Ofuda", dice: "2d6", type: "attack" },

      { name: "Raijin's Judgment", dice: "3d6", type: "attack" }
    ],
    defense: [
      { name: "Static Seal", dice: "1d3", type: "defense" },
      { name: "Static Seal", dice: "1d3", type: "defense" },

      { name: "Cataclysmic Storm Rite", dice: "2d3", type: "defense" },
      { name: "Cataclysmic Storm Rite", dice: "2d3", type: "defense" }
    ]
  }

  // Ice, Wind, Lightning follow same structure
};
