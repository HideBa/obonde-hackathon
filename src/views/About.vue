<template>
  <dev>
    <Renderer :orbitCtrl="true" position="true">
      <Camera
        :position="{ z: 5 }"
        :aspect="1"
        :far="2000"
        :fov="50"
        :near="0.1"
      />
      <Scene background="grey">
        <PointLight
          color="yellow"
          :intensity="0.5"
          :position="{ y: 50, z: 50 }"
        />
        <Box
          :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }"
          :scale="{ x: 2, y: 1, z: 1 }"
          :cast-shadow="true"
          :receive-shadow="true"
          @pointerEnter="onPointerEvent"
          @pointerOver="onPointerOver"
          @pointerMove="onPointerEvent"
          @pointerLeave="onPointerEvent"
          @click="onPointerEvent"
        >
          <LambertMaterial />
        </Box>
      </Scene>
    </Renderer>
    <Renderer>
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ z: 50 }" />
        <Box
          :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }"
          :scale="{ x: 2, y: 1, z: 1 }"
          :cast-shadow="true"
          :receive-shadow="true"
          @pointerEnter="onPointerEvent"
          @pointerOver="onPointerOver"
          @pointerMove="onPointerEvent"
          @pointerLeave="onPointerEvent"
          @click="onPointerEvent"
        >
          <MatcapMaterial name="392307_B3AE7D_6D5618_847C42" />
        </Box>
      </Scene>
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="1" />
        <HalftonePass :radius="1" :scatter="0" />
      </EffectComposer>
    </Renderer>
    <Renderer>
      <Camera :position="{ z: 5 }" />
      <Scene background="grey">
        <PointLight
          color="yellow"
          :intensity="0.5"
          :position="{ y: 50, z: 50 }"
        />
        <Box
          :size="1"
          :position="{ x: 10, y: 10, z: 0 }"
          :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }"
          :scale="{ x: 2, y: 3, z: 1 }"
        >
          <BasicMaterial />
        </Box>
      </Scene>
    </Renderer>
  </dev>
</template>

<script>
import {
  Box,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
  EffectComposer,
  UnrealBloomPass,
  HalftonePass,
  BasicMaterial,
  MatcapMaterial,
} from "troisjs";
export default {
  components: {
    Box,
    Camera,
    LambertMaterial,
    PointLight,
    Renderer,
    Scene,
    EffectComposer,
    UnrealBloomPass,
    HalftonePass,
    BasicMaterial,
    MatcapMaterial,
  },
  methods: {
    onPointerEvent(event) {
      console.log(event);
    },
    onPointerOver(event) {
      event.component.mesh.material.color.set(event.over ? 0xff0000 : 0xffffff);
    },
  },
};
</script>