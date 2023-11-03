// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

const mekJEI = java('mekanism.client.jei.MekanismJEI')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide(['engineersdecor:small_block_breaker', 'engineersdecor:small_lab_furnace', 'engineersdecor:small_electrical_furnace', 'engineersdecor:small_mineral_smelter', 'engineersdecor:small_freezer', 'engineersdecor:small_solar_panel', 'engineersdecor:small_milking_machine', 'engineersdecor:small_tree_cutter', 'engineersdecor:straight_pipe_valve', 'engineersdecor:straight_pipe_valve_redstone', 'engineersdecor:straight_pipe_valve_redstone_analog', 'engineersdecor:fluid_barrel', 'engineersdecor:small_fluid_funnel'])
	
	// Industrial Foregoing
	event.hide('industrialforegoing:biofuel_generator')
	event.hide('industrialforegoing:bioreactor')
	event.hide(/industrialforegoing:conveyo.+?/)
	event.hide(['industrialforegoing:infinity_drill', 'industrialforegoing:infinity_saw', 'industrialforegoing:infinity_hammer', 'industrialforegoing:infinity_trident', 'industrialforegoing:infinity_backpack', 'industrialforegoing:infinity_launcher'])
	event.hide(/industrialforegoing:.+?_black_hole_unit/)
	event.hide('industrialforegoing:pitiful_generator')
	event.hide(/industrialforegoing:mycelial_.+?/)
	
	// MEKANISM GENERATORS
	event.hide(/mekanismgenerators:fusion.+?/)
	event.hide('mekanismgenerators:laser_focus_matrix')
	event.hide(['mekanismgenerators:heat_generator', 'mekanismgenerators:wind_generator'])
	
	// MEKANISM STUFF WITH FUCKED UP NBT
	event.hide(Item.of('mekanism:atomic_disassembler', '{mekData:{EnergyContainers:[{Container:0b,stored:"1000000"}]}}'))
	event.hide(Item.of('mekanism:electric_bow', '{mekData:{EnergyContainers:[{Container:0b,stored:"120000"}]}}'))
	event.hide(Item.of('mekanism:flamethrower', '{mekData:{GasTanks:[{Tank:0b,stored:{amount:24000L,gasName:"mekanism:hydrogen"}}]}}'))
	event.hide(Item.of('mekanism:meka_tool', '{mekData:{EnergyContainers:[{Container:0b,stored:"16000000"}]}}'))
	event.hide(Item.of('mekanism:mekasuit_helmet', '{mekData:{EnergyContainers:[{Container:0b,stored:"16000000"}]}}'))
	event.hide(Item.of('mekanism:mekasuit_bodyarmor', '{mekData:{EnergyContainers:[{Container:0b,stored:"16000000"}]}}'))
	event.hide(Item.of('mekanism:mekasuit_pants', '{mekData:{EnergyContainers:[{Container:0b,stored:"16000000"}]}}'))
	event.hide(Item.of('mekanism:mekasuit_boots', '{mekData:{EnergyContainers:[{Container:0b,stored:"16000000"}]}}'))
	event.hide(Item.of('mekanismgenerators:hohlraum', '{mekData:{GasTanks:[{Tank:0b,stored:{amount:10L,gasName:"mekanismgenerators:fusion_fuel"}}]}}'))
	
	// MEKASUIT MODULES
	event.hide(/mekanis+.?:module_.+?/)
	
	event.hide(['mekanismgenerators:deuterium_bucket', 'mekanismgenerators:fusion_fuel_bucket', 'mekanismgenerators:tritium_bucket'])
	event.hide('mekanismgenerators:hohlraum')

	// mekanism macheenz
	event.hide(['mekanism:portable_qio_dashboard', 'mekanism:qio_drive_base', 'mekanism:qio_drive_hyper_dense', 'mekanism:qio_drive_time_dilating', 'mekanism:qio_drive_supermassive', 'mekanism:qio_dashboard', 'mekanism:qio_importer', 'mekanism:qio_exporter', 'mekanism:qio_redstone_adapter'])
	event.hide(['mekanism:teleporter', 'mekanism:teleporter_frame', 'mekanism:portable_teleporter', 'mekanism:atomic_disassembler', 'mekanism:electric_bow', 'mekanism:flamethrower', 'mekanism:meka_tool', 'mekanism:scuba_mask', 'mekanism:scuba_gear', 'mekanism:mekasuit_helmet', 'mekanism:mekasuit_bodyarmor', 'mekanism:mekasuit_pants', 'mekanism:mekasuit_boots'])
	event.hide('mekanism:module_base')
	event.hide(/mekanis.+?:module.+?unit/)
	event.hide(/mekanism:.+?_factory/)
	
	event.hide('mekanism:upgrade_filter')
	event.hide('mekanismgenerators:fusion_fuel')
	event.hide('mekanismgenerators:liquid_deuterium')
	event.hide('mekanismgenerators:liquid_tritium')
	
	event.hide(['thermal:dynamo_stirling', 'thermal:dynamo_magmatic'])
	event.hide('thermal:satchel')
	
})
onEvent('jei.hide.fluids', event => {
	event.hide('mekanismgenerators:fusion_fuel')
	event.hide('mekanismgenerators:deuterium')
	event.hide('mekanismgenerators:tritium')
})
onEvent('jei.hide.custom', event => {
	event.get(mekJEI.TYPE_GAS).hide('mekanismgenerators:deuterium')
	event.get(mekJEI.TYPE_GAS).hide('mekanismgenerators:fusion_fuel')
	event.get(mekJEI.TYPE_GAS).hide('mekanismgenerators:tritium')
})
onEvent('jei.hide.gas', event => {
	event.hide('mekanismgenerators:deuterium')
})