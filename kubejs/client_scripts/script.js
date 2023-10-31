// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide({output: 'mekanismgenerators:hohlraum'})
	event.hide({output: ['mekanism:portable_qio_dashboard', 'mekanism:qio_drive_base', 'mekanism:qio_drive_hyper_dense', 'mekanism:qio_drive_time_dilating', 'mekanism:qio_drive_supermassive', 'mekanism:qio_dashboard', 'mekanism:qio_importer', 'mekanism:qio_exporter', 'mekanism:qio_redstone_adapter'})
	event.hide({output: ['mekanism:teleporter', 'mekanism:teleporter_frame', 'mekanism:portable_teleporter', 'mekanism:atomic_disassembler', 'mekanism:electric_bow', 'mekanism:flamethrower', 'mekanism:meka_tool', 'mekanism:scuba_mask', 'mekanism:scuba_gear', 'mekanism:mekasuit_helmet', 'mekanism:mekasuit_bodyarmor', 'mekanism:mekasuit_pants', 'mekanism:mekasuit_boots']})
	event.hide({output: ['mekanism:module_base', 'mekanismgenerators:module_solar_recharging_unit', 'mekanismgenerators:module_geothermal_recharging_unit', 'mekanism:module_energy_unit', 'mekanism:module_laser_dissipation_unit', 'mekanism:module_magnetic_attraction_unit', 'mekanism:module_locomotive_boosting_unit', 'mekanism:module_vision_enhancement_unit']})
})