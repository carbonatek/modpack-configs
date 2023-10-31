// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	// ENGINEER'S DECOR
	event.remove({output: ['engineersdecor:small_block_breaker', 'engineersdecor:small_lab_furnace', 'engineersdecor:small_electrical_furnace', 'engineersdecor:small_mineral_smelter', 'engineersdecor:small_freezer', 'engineersdecor:small_solar_panel', 'engineersdecor:small_milking_machine', 'engineersdecor:small_tree_cutter', 'engineersdecor:straight_pipe_valve', 'engineersdecor:straight_pipe_valve_redstone', 'engineersdecor:straight_pipe_valve_redstone_analog', 'engineersdecor:fluid_barrel', 'engineersdecor:small_fluid_funnel']})
	
	// IMMERSIVE ENGINEERING
	event.remove({output: Item.of('immersiveengineering:dynamo')})
	
	// INDUSTRIAL FOREGOING
	event.remove({output: 'industrialforegoing:biofuel_generator'})
	event.remove({output: 'industrialforegoing:bioreactor'})
	event.remove({output: /industrialforegoing:conveyo.+?/})
	event.remove({output: ['industrialforegoing:infinity_drill', 'industrialforegoing:infinity_saw', 'industrialforegoing:infinity_hammer', 'industrialforegoing:infinity_trident', 'industrialforegoing:infinity_backpack', 'industrialforegoing:infinity_launcher']})
	event.remove({output: /industrialforegoing:.+?_black_hole_unit/})
	event.remove({output: 'industrialforegoing:pitiful_generator'})
	event.remove({output: /industrialforegoing:mycelial_.+?/})

	// MEKANISM
	event.remove({output: 'mekanismgenerators:hohlraum'})
	event.remove({output: ['mekanism:portable_qio_dashboard', 'mekanism:qio_drive_base', 'mekanism:qio_drive_hyper_dense', 'mekanism:qio_drive_time_dilating', 'mekanism:qio_drive_supermassive', 'mekanism:qio_dashboard', 'mekanism:qio_importer', 'mekanism:qio_exporter', 'mekanism:qio_redstone_adapter', 'mekanism:qio_drive_array']})
	event.remove({output: ['mekanism:teleporter', 'mekanism:teleporter_frame', 'mekanism:portable_teleporter', 'mekanism:atomic_disassembler', 'mekanism:electric_bow', 'mekanism:flamethrower', 'mekanism:meka_tool', 'mekanism:scuba_mask', 'mekanism:scuba_gear', 'mekanism:mekasuit_helmet', 'mekanism:mekasuit_bodyarmor', 'mekanism:mekasuit_pants', 'mekanism:mekasuit_boots', 'mekanism:modification_station']})
	event.remove({output: ['mekanism:module_base']})
	event.remove({output: ['mekanismgenerators:wind_generator', 'mekanismgenerators:heat_generator', 'mekanismgenerators:fusion_reactor_frame', 'mekanismgenerators:fusion_reactor_controller', 'mekanismgenerators:fusion_reactor_port', 'mekanismgenerators:fusion_reactor_logic_adapter',]})
	event.remove({output: /mekanis.+?:module.+?unit/})
	event.remove({output: ['mekanism:basic_tier_installer', 'mekanism:advanced_tier_installer', 'mekanism:elite_tier_installer', 'mekanism:ultimate_tier_installer']})
	event.remove({output: /mekanism:.+?_factory/})
	
	// Fusion Fuel (Mekanism)
	// Remove Filter Upgrade, no longer needed if the only use for Heavy Water is gone.
	event.remove({output: 'mekanism:upgrade_filter'})
	// Fuels
	event.remove({id: 'mekanismgenerators:separating/heavy_water'})
	event.remove({id: 'mekanismgenerators:rotary/deuterium'})
	event.remove({id: 'mekanismgenerators:chemical_infusing/fusion_fuel'})
	event.remove({id: 'mekanismgenerators:rotary/fusion_fuel'})
	event.remove({id: 'mekanismgenerators:activating/tritium'})
	event.remove({id: 'mekanismgenerators:rotary/tritium'})
	
	
	
	// MEKANISM MORE LIKE AUTISM
	event.remove({output: Item.of('mekanism:electric_bow', '{mekData:{EnergyContainers:[{Container:0b,stored:"120000"}]}}')})
	event.remove({output: Item.of('mekanism:atomic_disassembler', '{mekData:{EnergyContainers:[{Container:0b,stored:"1000000"}]}}')})
	event.remove({output: Item.of('mekanism:meka_tool', '{mekData:{EnergyContainers:[{Container:0b,stored:"16000000"}]}}')})
	event.remove({output: Item.of('mekanism:mekasuit_helmet', '{mekData:{EnergyContainers:[{Container:0b,stored:"16000000"}]}}')})
	event.remove({output: Item.of('mekanism:mekasuit_bodyarmor', '{mekData:{EnergyContainers:[{Container:0b,stored:"16000000"}]}}')})
	event.remove({output: Item.of('mekanism:mekasuit_pants', '{mekData:{EnergyContainers:[{Container:0b,stored:"16000000"}]}}')})
	event.remove({output: Item.of('mekanism:mekasuit_boots', '{mekData:{EnergyContainers:[{Container:0b,stored:"16000000"}]}}')})
	event.remove({output: Item.of('mekanism:flamethrower', '{mekData:{GasTanks:[{Tank:0b,stored:{amount:24000L,gasName:"mekanism:hydrogen"}}]}}')})
	event.remove({output: Item.of('mekanism:scuba_tank', '{mekData:{GasTanks:[{Tank:0b,stored:{amount:24000L,gasName:"mekanism:oxygen"}}]}}')})
	
	// Thermal Expansion
	event.remove({output: ['thermal:dynamo_stirling', 'thermal:dynamo_magmatic']})
	event.remove({output: 'thermal:satchel'})
	
	
	// Thermal Fuel
	//event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:gasoline', 1000)).energy(2750000)
	//event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:diesel', 1000)).energy(4250000)
	//event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:sulfurized_diesel', 1000)).energy(1833000)





	// ---------------- gimme gimme gimme a man after midnight

	// KEKANISM (M)
	event.shaped(
		Item.of('mekanism:basic_tier_installer', 1),
		[
			'ABA',
			'CDC',
			'ABA'
		], {
			A: 'projectred_core:red_ingot',
			B: 'mekanism:basic_control_circuit',
			C: '#forge:ingots/steel',
			D: 'mekanism:steel_casing'
		}
	)
	event.shaped(
		Item.of('mekanism:advanced_tier_installer', 1),
		[
			'ABA',
			'CDC',
			'ABA'
		], {
			A: 'mekanism:alloy_infused',
			B: 'mekanism:advanced_control_circuit',
			C: '#forge:ingots/invar',
			D: 'mekanism:steel_casing'
		}
	)
	event.shaped(
		Item.of('mekanism:elite_tier_installer', 1),
		[
			'ABA',
			'CDC',
			'ABA'
		], {
			A: 'mekanism:alloy_reinforced',
			B: 'mekanism:elite_control_circuit',
			C: '#forge:ingots/signalum',
			D: 'mekanism:steel_casing'
		}
	)
	event.shaped(
		Item.of('mekanism:ultimate_tier_installer', 1),
		[
			'ABA',
			'CDC',
			'ABA'
		], {
			A: 'mekanism:alloy_atomic',
			B: 'mekanism:ultimate_control_circuit',
			C: '#forge:ingots/enderium',
			D: 'tetra:dragon_sinew'
		}
	)
	
	// Immersive Engineering
	
	event.shaped(
		Item.of('immersiveengineering:dynamo', 1),
		[
			'ABA',
			'CDC'
		], {
			A: 'minecraft:redstone',
			B: 'immersiveengineering:component_steel',
			C: 'immersiveengineering:ingot_steel',
			D: 'immersiveengineering:coil_lv'
		}
	)


	// VZOOM VZOOM

  const ia = "immersive_aircraft:"
  const ie = "immersiveengineering:"
  const cr = "create:"

  event.recipes.createMechanicalCrafting(
    Item.of(ia + 'hull_reinforcement', 4),
    [
      'AAAA',
      'BBBB',
      'AAAA'
    ], {
      A: ie + 'storage_steel',
      B: ia + 'hull'
    }
  )

  event.recipes.createMechanicalCrafting(
    Item.of(ia + 'engine', 1),
    [
      'ABA',
      'CDC',
      'CEC',
      'ABA'
    ], {
      A: ie + 'storage_steel',
      B: ie + 'plate_steel',
      C: cr + 'steam_engine',
      D: cr + 'fluid_tank',
      E: cr + 'blaze_burner'
    }
  )
  event.recipes.createMechanicalCrafting(
    Item.of(ia + 'nether_engine', 1),
    [
      'A',
      'ABA',
      'A'
    ], {
      A: 'minecraft:netherite_scrap',
      B: ia + 'engine'
    }
  )

  event.recipes.createMechanicalCrafting(
    Item.of(ia + 'propeller', 1),
    [
      'AABAA'
    ], {
      A: '#forge:plates/iron',
      B: cr + 'shaft'
    }
  )


 event.recipes.createMechanicalCrafting(
    Item.of(ia + 'gyrodyne', 1),
    [
      'ABBC',
      'DEFG',
      'ABBC'
    ], {
      A: cr + 'hand_crank',
      B: ia + 'sail',
      C: ie + 'hemp_fiber',
      D: '#forge:storage_blocks',
      E: '#minecraft:boats',
      F: cr + 'cogwheel',
      G: ia + 'propeller'
    }
  )

  event.shaped( // mozna zkurvir?
    Item.of(ia + 'sail', 1),
    [
      'A',
      'B',
      'C'
    ], {
      A: ie + 'stick_treated',
      B: ie + 'hemp_fabric',
      C: ie + 'hemp_fiber'
    }
  )

 event.recipes.createMechanicalCrafting(
    Item.of(ia + 'biplane', 1),
    [
      '  AA  ',
      'AAABCD',
      '  AA  '
    ], {
      A: ia + 'hull',
      B: '#forge:chests/wooden',
      C: ia + 'engine',
      D: ia + 'propeller'
    }
  )

  event.recipes.createMechanicalCrafting(
    Item.of(ia + 'enhanced_propeller', 1),
    [
      'AABAA',
    ], {
      A: '#forge:plates/steel',
      B: 'mekanism:steel_casing'
    }
  )


  event.recipes.createMechanicalCrafting(
    Item.of(ia + 'airship', 1),
    [
      'AAAAA',
      'AAAAA',
      'BCDCB',
      ' BBB ',
    ], {
      A: ia + 'sail',
      B: ia + 'hull',
      C: '#create:seats',
      D: ia + 'engine'
    }
  )



})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:evoker")
        .removeLoot("minecraft:totem_of_undying");
});
