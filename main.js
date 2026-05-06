import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("#scene");
const stageBar = document.querySelector(".stage-list");
const stageColorList = document.querySelector("#stageColorList");
const downloadPngBtn = document.querySelector("#downloadPngBtn");
const settingsBtn = document.querySelector("#settingsBtn");
const configPanel = document.querySelector("#configPanel");
const closeConfigBtn = document.querySelector("#closeConfigBtn");

const coneRange = document.querySelector("#coneRange");
const coneValue = document.querySelector("#coneValue");
const coneRatioInput = document.querySelector("#coneRatio");
const coneRatioValue = document.querySelector("#coneRatioValue");
const coneExtensionInput = document.querySelector("#coneExtension");
const coneExtensionValue = document.querySelector("#coneExtensionValue");

const seedInput = document.querySelector("#seedInput");
const generateSeedBtn = document.querySelector("#generateSeedBtn");
const autoApplySeedInput = document.querySelector("#autoApplySeed");
const showConesToggle = document.querySelector("#showCones");
const showSpheresToggle = document.querySelector("#showSpheres");
const showConnectorsToggle = document.querySelector("#showConnectors");

const addStageBtn = document.querySelector("#addStageBtn");
const stageCountValue = document.querySelector("#stageCountValue");

const sphereOpacityInput = document.querySelector("#sphereOpacity");
const sphereOpacityValue = document.querySelector("#sphereOpacityValue");
const shaderModeInput = document.querySelector("#shaderMode");
const showToonOutlineInput = document.querySelector("#showToonOutline");
const toonOutlineColorInput = document.querySelector("#toonOutlineColor");
const toonOutlineThicknessInput = document.querySelector("#toonOutlineThickness");
const toonOutlineThicknessValue = document.querySelector("#toonOutlineThicknessValue");
const toonOutlineXrayInput = document.querySelector("#toonOutlineXray");
const toonOutlineDashedInput = document.querySelector("#toonOutlineDashed");
const toonOutlineDashLengthInput = document.querySelector("#toonOutlineDashLength");
const toonOutlineDashLengthValue = document.querySelector("#toonOutlineDashLengthValue");
const toonOutlineDashGapInput = document.querySelector("#toonOutlineDashGap");
const toonOutlineDashGapValue = document.querySelector("#toonOutlineDashGapValue");
const toonOutlineDashRepeatInput = document.querySelector("#toonOutlineDashRepeat");
const toonOutlineDashRepeatValue = document.querySelector("#toonOutlineDashRepeatValue");

const coneShaderModeInput = document.querySelector("#coneShaderMode");
const coneColorInput = document.querySelector("#coneColor");
const coneOriginModeInput = document.querySelector("#coneOriginMode");
const angleLimiterInput = document.querySelector("#angleLimiter");
const coneActiveOpacityInput = document.querySelector("#coneActiveOpacity");
const coneActiveOpacityValue = document.querySelector("#coneActiveOpacityValue");
const coneInactiveOpacityInput = document.querySelector("#coneInactiveOpacity");
const coneInactiveOpacityValue = document.querySelector("#coneInactiveOpacityValue");

const dirAzimuthInput = document.querySelector("#dirAzimuth");
const dirAzimuthValue = document.querySelector("#dirAzimuthValue");
const dirElevationInput = document.querySelector("#dirElevation");
const dirElevationValue = document.querySelector("#dirElevationValue");

const intersectionColorInput = document.querySelector("#intersectionColor");
const intersectionWidthInput = document.querySelector("#intersectionWidth");
const intersectionWidthValue = document.querySelector("#intersectionWidthValue");
const showIntersectionInput = document.querySelector("#showIntersection");
const showInitialIntersectionInput = document.querySelector("#showInitialIntersection");
const initialIntersectionColorInput = document.querySelector("#initialIntersectionColor");
const initialIntersectionWidthInput = document.querySelector("#initialIntersectionWidth");
const initialIntersectionWidthValue = document.querySelector("#initialIntersectionWidthValue");

const showArrowInput = document.querySelector("#showArrow");
const arrowColorInput = document.querySelector("#arrowColor");
const arrowThicknessInput = document.querySelector("#arrowThickness");
const arrowThicknessValue = document.querySelector("#arrowThicknessValue");
const arrowExtensionInput = document.querySelector("#arrowExtension");
const arrowExtensionValue = document.querySelector("#arrowExtensionValue");
const arrowHeadLengthInput = document.querySelector("#arrowHeadLength");
const arrowHeadLengthValue = document.querySelector("#arrowHeadLengthValue");
const arrowHeadWidthInput = document.querySelector("#arrowHeadWidth");
const arrowHeadWidthValue = document.querySelector("#arrowHeadWidthValue");
const arrowOpacityInput = document.querySelector("#arrowOpacity");
const arrowOpacityValue = document.querySelector("#arrowOpacityValue");
const showInitialArrowInput = document.querySelector("#showInitialArrow");
const initialArrowColorInput = document.querySelector("#initialArrowColor");
const initialArrowThicknessInput = document.querySelector("#initialArrowThickness");
const initialArrowThicknessValue = document.querySelector("#initialArrowThicknessValue");
const initialArrowExtensionInput = document.querySelector("#initialArrowExtension");
const initialArrowExtensionValue = document.querySelector("#initialArrowExtensionValue");
const initialArrowHeadLengthInput = document.querySelector("#initialArrowHeadLength");
const initialArrowHeadLengthValue = document.querySelector("#initialArrowHeadLengthValue");
const initialArrowHeadWidthInput = document.querySelector("#initialArrowHeadWidth");
const initialArrowHeadWidthValue = document.querySelector("#initialArrowHeadWidthValue");
const initialArrowOpacityInput = document.querySelector("#initialArrowOpacity");
const initialArrowOpacityValue = document.querySelector("#initialArrowOpacityValue");

const connectorOpacityInput = document.querySelector("#connectorOpacity");
const connectorOpacityValue = document.querySelector("#connectorOpacityValue");
const connectorColorInput = document.querySelector("#connectorColor");
const connectorThicknessInput = document.querySelector("#connectorThickness");
const connectorThicknessValue = document.querySelector("#connectorThicknessValue");

const originDotColorInput = document.querySelector("#originDotColor");
const originDotSizeInput = document.querySelector("#originDotSize");
const originDotSizeValue = document.querySelector("#originDotSizeValue");
const hitDotColorInput = document.querySelector("#hitDotColor");
const hitDotSizeInput = document.querySelector("#hitDotSize");
const hitDotSizeValue = document.querySelector("#hitDotSizeValue");
const showDotOutlineInput = document.querySelector("#showDotOutline");
const dotOutlineColorInput = document.querySelector("#dotOutlineColor");
const dotOutlineThicknessInput = document.querySelector("#dotOutlineThickness");
const dotOutlineThicknessValue = document.querySelector("#dotOutlineThicknessValue");

const showAxesToggle = document.querySelector("#showAxes");
const showFogToggle = document.querySelector("#showFog");
const fogDensityInput = document.querySelector("#fogDensity");
const fogDensityValue = document.querySelector("#fogDensityValue");
const axisColorInput = document.querySelector("#axisColor");
const axisLengthInput = document.querySelector("#axisLength");
const axisLengthValue = document.querySelector("#axisLengthValue");
const axisThicknessInput = document.querySelector("#axisThickness");
const axisThicknessValue = document.querySelector("#axisThicknessValue");

const exportConfigBtn = document.querySelector("#exportConfigBtn");
const copyConfigBtn = document.querySelector("#copyConfigBtn");
const configExportArea = document.querySelector("#configExport");

const displayModeInput = document.querySelector("#displayMode");
const gridAspectRatioInput = document.querySelector("#gridAspectRatio");
const gridBorderToggle = document.querySelector("#gridBorderToggle");
const gridBorderColorInput = document.querySelector("#gridBorderColor");
const gridBorderThicknessInput = document.querySelector("#gridBorderThickness");
const gridBorderThicknessValue = document.querySelector("#gridBorderThicknessValue");
const gridOuterMarginInput = document.querySelector("#gridOuterMargin");
const gridOuterMarginValue = document.querySelector("#gridOuterMarginValue");
const gridCellGapInput = document.querySelector("#gridCellGap");
const gridCellGapValue = document.querySelector("#gridCellGapValue");
const gridNumberShowInput = document.querySelector("#gridNumberShow");
const gridNumberFontInput = document.querySelector("#gridNumberFont");
const gridNumberColorInput = document.querySelector("#gridNumberColor");
const gridNumberSizeInput = document.querySelector("#gridNumberSize");
const gridNumberSizeValue = document.querySelector("#gridNumberSizeValue");
const gridNumberMarginInput = document.querySelector("#gridNumberMargin");
const gridNumberMarginValue = document.querySelector("#gridNumberMarginValue");
const gridNumberPlacementInput = document.querySelector("#gridNumberPlacement");
const gridLabelShowInput = document.querySelector("#gridLabelShow");
const gridLabelFontInput = document.querySelector("#gridLabelFont");
const gridLabelColorInput = document.querySelector("#gridLabelColor");
const gridLabelSizeInput = document.querySelector("#gridLabelSize");
const gridLabelSizeValue = document.querySelector("#gridLabelSizeValue");
const gridLabelMarginInput = document.querySelector("#gridLabelMargin");
const gridLabelMarginValue = document.querySelector("#gridLabelMarginValue");
const gridLabelPlacementInput = document.querySelector("#gridLabelPlacement");
const gridBorderOverlay = document.querySelector("#gridBorderOverlay");
const gridBorderCtx = gridBorderOverlay.getContext("2d");
const cameraTypeInput = document.querySelector("#cameraType");
const cameraFovInput = document.querySelector("#cameraFov");
const cameraFovValue = document.querySelector("#cameraFovValue");
const cameraZoomInput = document.querySelector("#cameraZoom");
const cameraZoomValue = document.querySelector("#cameraZoomValue");
const resetCameraBtn = document.querySelector("#resetCameraBtn");
const sceneWrap = document.querySelector(".scene-wrap");
const sceneUi = document.querySelector(".scene-ui");

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
scene.fog = null;

const perspectiveCamera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
perspectiveCamera.position.set(5.5, 3.7, 7);

const orthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
orthographicCamera.position.set(5.5, 3.7, 7);

let camera = perspectiveCamera;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 4;
controls.maxDistance = 16;
controls.target.set(0, 0.8, 0);

const defaultCameraPosition = perspectiveCamera.position.clone();
const defaultCameraTarget = controls.target.clone();

scene.add(new THREE.HemisphereLight(0xffffff, 0x33557a, 1.2));
const keyLight = new THREE.DirectionalLight(0xffffff, 0.95);
keyLight.position.set(5, 8, 4);
scene.add(keyLight);

let baseDirection = new THREE.Vector3(0.85, 1.05, 0.22).normalize();

function updateBaseDirection() {
  const az = THREE.MathUtils.degToRad(state.dirAzimuth);
  const el = THREE.MathUtils.degToRad(state.dirElevation);
  const cosEl = Math.cos(el);
  baseDirection.set(cosEl * Math.cos(az), Math.sin(el), cosEl * Math.sin(az)).normalize();
}
const colorFallbacks = ["#9fd9ff", "#7bc8ff", "#53b7f8", "#2da6ee", "#1d8cd6", "#126fb3"];

function toNumber(value, fallback) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function toBoolean(value, fallback) {
  return typeof value === "boolean" ? value : fallback;
}

function toColor(value, fallback) {
  return new THREE.Color(typeof value === "string" ? value : fallback);
}

function readCameraPosition(value) {
  if (!value || typeof value !== "object") {
    return null;
  }
  const x = Number(value.x);
  const y = Number(value.y);
  const z = Number(value.z);
  if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
    return null;
  }
  return new THREE.Vector3(x, y, z);
}

async function loadDefaultConfig() {
  try {
    const res = await fetch("./config/default-config.json", { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Failed to load config: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.warn("Using built-in defaults because config load failed.", error);
    return null;
  }
}

const loadedConfig = await loadDefaultConfig();
const cfg = loadedConfig ?? {};

const state = {
  stageCount: THREE.MathUtils.clamp(Math.trunc(toNumber(cfg.stageCount, 4)), 1, 10),
  stageMin: 1,
  stageMax: 10,
  stageNames: Array.isArray(cfg.stageNames) && cfg.stageNames.length > 0
    ? cfg.stageNames.map((name, i) => String(name || `Stage ${i + 1}`))
    : ["Stage 1", "Stage 2", "Stage 3", "Stage 4"],
  targetStage: Math.max(1, Math.round(toNumber(cfg.activeStage, 1))),
  animatedStage: Math.max(1, Math.round(toNumber(cfg.activeStage, 1))),
  coneDegrees: toNumber(cfg.coneDegrees, Number(coneRange.value)),
  coneRatio: toNumber(cfg.coneRatio, Number(coneRatioInput.value)),
  coneExtension: toNumber(cfg.coneExtension, Number(coneExtensionInput.value)),
  seedValue: Math.trunc(toNumber(cfg.seed, Number(seedInput.value) || 42)),
  autoApplySeed: toBoolean(cfg.autoApplySeed, true),
  showConeHistory: toBoolean(cfg.showConeHistory, true),
  showSpheres: toBoolean(cfg.showSpheres, true),
  showConnectors: toBoolean(cfg.showConnectors, true),
  shaderMode: typeof cfg.shaderMode === "string" ? cfg.shaderMode : "toon",
  showToonOutline: toBoolean(cfg.toonOutline?.show, true),
  toonOutlineColor: toColor(cfg.toonOutline?.color, toonOutlineColorInput.value),
  toonOutlineThickness: toNumber(cfg.toonOutline?.thickness, Number(toonOutlineThicknessInput.value)),
  toonOutlineXray: toBoolean(cfg.toonOutline?.xray, false),
  toonOutlineDashed: toBoolean(cfg.toonOutline?.dashed, false),
  toonOutlineDashLength: toNumber(cfg.toonOutline?.dashLength, Number(toonOutlineDashLengthInput.value)),
  toonOutlineDashGap: toNumber(cfg.toonOutline?.dashGap, Number(toonOutlineDashGapInput.value)),
  toonOutlineDashRepeat: toNumber(cfg.toonOutline?.dashRepeat, Number(toonOutlineDashRepeatInput.value)),
  sphereOpacity: toNumber(cfg.sphereOpacity, Number(sphereOpacityInput.value)),
  sphereStageColors: Array.isArray(cfg.sphereStageColors) && cfg.sphereStageColors.length > 0
    ? cfg.sphereStageColors.map((hex) => toColor(hex, "#ffffff"))
    : ["#000000", "#949494", "#ffffff", "#ffffff"].map((hex) => new THREE.Color(hex)),
  coneShaderMode: typeof cfg.coneHistory?.shaderMode === "string" ? cfg.coneHistory.shaderMode : "flat",
  coneColor: toColor(cfg.coneHistory?.color, "#ffb454"),
  coneOriginMode: typeof cfg.coneHistory?.originMode === "string" ? cfg.coneHistory.originMode : "world",
  angleLimiter: toBoolean(cfg.coneHistory?.angleLimiter, true),
  coneActiveOpacity: toNumber(cfg.coneHistory?.activeOpacity, Number(coneActiveOpacityInput.value)),
  coneInactiveOpacity: toNumber(cfg.coneHistory?.inactiveOpacity, Number(coneInactiveOpacityInput.value)),
  dirAzimuth: toNumber(cfg.baseDirection?.azimuth, Number(dirAzimuthInput.value)),
  dirElevation: toNumber(cfg.baseDirection?.elevation, Number(dirElevationInput.value)),
  intersectionColor: toColor(cfg.coneIntersection?.color, intersectionColorInput.value),
  intersectionWidth: toNumber(cfg.coneIntersection?.width, Number(intersectionWidthInput.value)),
  showIntersection: toBoolean(cfg.coneIntersection?.show, true),
  initialIntersectionColor: toColor(cfg.initialConeIntersection?.color, initialIntersectionColorInput.value),
  initialIntersectionWidth: toNumber(cfg.initialConeIntersection?.width, Number(initialIntersectionWidthInput.value)),
  showInitialIntersection: toBoolean(cfg.initialConeIntersection?.show, true),
  showArrow: toBoolean(cfg.arrow?.show, true),
  arrowColor: toColor(cfg.arrow?.color, arrowColorInput.value),
  arrowThickness: toNumber(cfg.arrow?.thickness, Number(arrowThicknessInput.value)),
  arrowExtension: toNumber(cfg.arrow?.extension, Number(arrowExtensionInput.value)),
  arrowHeadLength: toNumber(cfg.arrow?.headLength, Number(arrowHeadLengthInput.value)),
  arrowHeadWidth: toNumber(cfg.arrow?.headWidth, Number(arrowHeadWidthInput.value)),
  arrowOpacity: toNumber(cfg.arrow?.opacity, Number(arrowOpacityInput.value)),
  showInitialArrow: toBoolean(cfg.initialArrow?.show, true),
  initialArrowColor: toColor(cfg.initialArrow?.color, initialArrowColorInput.value),
  initialArrowThickness: toNumber(cfg.initialArrow?.thickness, Number(initialArrowThicknessInput.value)),
  initialArrowExtension: toNumber(cfg.initialArrow?.extension, Number(initialArrowExtensionInput.value)),
  initialArrowHeadLength: toNumber(cfg.initialArrow?.headLength, Number(initialArrowHeadLengthInput.value)),
  initialArrowHeadWidth: toNumber(cfg.initialArrow?.headWidth, Number(initialArrowHeadWidthInput.value)),
  initialArrowOpacity: toNumber(cfg.initialArrow?.opacity, Number(initialArrowOpacityInput.value)),
  connectorOpacity: toNumber(cfg.connectors?.opacity, Number(connectorOpacityInput.value)),
  connectorColor: toColor(cfg.connectors?.color, connectorColorInput.value),
  connectorThickness: toNumber(cfg.connectors?.thickness, Number(connectorThicknessInput.value)),
  originDotColor: toColor(cfg.dots?.originColor, originDotColorInput.value),
  hitDotColor: toColor(cfg.dots?.hitColor, hitDotColorInput.value),
  originDotSize: toNumber(cfg.dots?.originSize, Number(originDotSizeInput.value)),
  hitDotSize: toNumber(cfg.dots?.hitSize, Number(hitDotSizeInput.value)),
  showDotOutline: toBoolean(cfg.dots?.outline?.show, true),
  dotOutlineColor: toColor(cfg.dots?.outline?.color, dotOutlineColorInput.value),
  dotOutlineThickness: toNumber(cfg.dots?.outline?.thickness, Number(dotOutlineThicknessInput.value)),
  showAxes: toBoolean(cfg.axes?.show, true),
  axisColor: toColor(cfg.axes?.color, axisColorInput.value),
  axisLength: toNumber(cfg.axes?.length, Number(axisLengthInput.value)),
  axisThickness: toNumber(cfg.axes?.thickness, Number(axisThicknessInput.value)),
  showFog: toBoolean(cfg.fog?.show, false),
  fogDensity: toNumber(cfg.fog?.density, Number(fogDensityInput.value)),
  displayMode: typeof cfg.display?.mode === "string" ? cfg.display.mode : "single",
  gridAspectRatio: typeof cfg.display?.gridAspectRatio === "string" ? cfg.display.gridAspectRatio : "free",
  gridBorderShow: toBoolean(cfg.display?.gridBorder?.show, true),
  gridBorderColor: toColor(cfg.display?.gridBorder?.color, "#e4e4e7"),
  gridBorderThickness: toNumber(cfg.display?.gridBorder?.thickness, 1),
  gridOuterMargin: toNumber(cfg.display?.gridOuterMargin, 0),
  gridCellGap: toNumber(cfg.display?.gridCellGap, 0),
  gridNumberShow: toBoolean(cfg.display?.gridNumber?.show, false),
  gridNumberFont: typeof cfg.display?.gridNumber?.font === "string" ? cfg.display.gridNumber.font : "Inter, system-ui, sans-serif",
  gridNumberColor: toColor(cfg.display?.gridNumber?.color, "#111827"),
  gridNumberSize: toNumber(cfg.display?.gridNumber?.size, 24),
  gridNumberMargin: toNumber(cfg.display?.gridNumber?.margin, 6),
  gridNumberPlacement: typeof cfg.display?.gridNumber?.placement === "string" ? cfg.display.gridNumber.placement : "top-middle",
  gridLabelShow: toBoolean(cfg.display?.gridLabel?.show, false),
  gridLabelFont: typeof cfg.display?.gridLabel?.font === "string" ? cfg.display.gridLabel.font : "Inter, system-ui, sans-serif",
  gridLabelColor: toColor(cfg.display?.gridLabel?.color, "#111827"),
  gridLabelSize: toNumber(cfg.display?.gridLabel?.size, 16),
  gridLabelMargin: toNumber(cfg.display?.gridLabel?.margin, 6),
  gridLabelPlacement: typeof cfg.display?.gridLabel?.placement === "string" ? cfg.display.gridLabel.placement : "top-middle",
  cameraType: typeof cfg.camera?.type === "string" ? cfg.camera.type : "perspective",
  cameraFov: toNumber(cfg.camera?.fov, 48),
  cameraZoom: toNumber(cfg.camera?.zoom, 1.5)
};

state.targetStage = THREE.MathUtils.clamp(state.targetStage, 1, state.stageCount);
state.animatedStage = state.targetStage;

let stageRadii = [];
let stageOffsets = [];
let sphereMeshes = [];
let sphereOutlineMeshes = [];
let hitDots = [];
let hitDotOutlines = [];
let stageConeMeshes = [];
let axisMeshes = [];
let stageButtons = [];

function createDotMaterial(color) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    depthTest: false,
    depthWrite: false
  });
}

function createDotOutlineMaterial(color) {
  return new THREE.MeshBasicMaterial({
    color,
    side: THREE.BackSide,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    opacity: 1
  });
}

const originDot = new THREE.Mesh(
  new THREE.SphereGeometry(state.originDotSize, 24, 24),
  createDotMaterial(state.originDotColor)
);
originDot.renderOrder = 10;
scene.add(originDot);

const originDotOutline = new THREE.Mesh(
  new THREE.SphereGeometry(state.originDotSize, 24, 24),
  createDotOutlineMaterial(state.dotOutlineColor)
);
originDotOutline.renderOrder = 9;
scene.add(originDotOutline);

function createTubeMesh(color, opacity) {
  const mesh = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(0, 0.001, 0)], false), 8, 0.01, 10, false),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false, depthTest: false, side: THREE.DoubleSide })
  );
  mesh.renderOrder = 5;
  return mesh;
}

const pathConnector = createTubeMesh(state.connectorColor, state.connectorOpacity);
scene.add(pathConnector);

const arrow = new THREE.Group();
const arrowShaft = new THREE.Mesh(
  new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(0, 0.001, 0)], false), 8, 0.01, 10, false),
  new THREE.MeshBasicMaterial({ color: state.arrowColor, transparent: true, opacity: 1.0, depthWrite: false, depthTest: false })
);
arrowShaft.renderOrder = 6;
const arrowHead = new THREE.Mesh(
  new THREE.ConeGeometry(state.arrowHeadWidth, state.arrowHeadLength, 16, 1),
  new THREE.MeshBasicMaterial({ color: state.arrowColor, transparent: true, opacity: 1.0, depthWrite: false, depthTest: false })
);
arrowHead.renderOrder = 6;
arrow.add(arrowShaft, arrowHead);
scene.add(arrow);

const initialArrow = new THREE.Group();
const initialArrowShaft = new THREE.Mesh(
  new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(0, 0.001, 0)], false), 8, 0.01, 10, false),
  new THREE.MeshBasicMaterial({ color: state.initialArrowColor, transparent: true, opacity: 1.0, depthWrite: false, depthTest: false })
);
initialArrowShaft.renderOrder = 6;
const initialArrowHead = new THREE.Mesh(
  new THREE.ConeGeometry(state.initialArrowHeadWidth, state.initialArrowHeadLength, 16, 1),
  new THREE.MeshBasicMaterial({ color: state.initialArrowColor, transparent: true, opacity: 1.0, depthWrite: false, depthTest: false })
);
initialArrowHead.renderOrder = 6;
initialArrow.add(initialArrowShaft, initialArrowHead);
scene.add(initialArrow);

const coneIntersection = createTubeMesh(state.intersectionColor, 0.95);
coneIntersection.renderOrder = 4;
scene.add(coneIntersection);

const initialConeIntersection = createTubeMesh(state.initialIntersectionColor, 0.95);
initialConeIntersection.renderOrder = 4;
scene.add(initialConeIntersection);

const baseConeGeometry = new THREE.ConeGeometry(1, 1, 44, 1, true);
baseConeGeometry.translate(0, -0.5, 0);

function createSphereMaterial(color) {
  const common = {
    color,
    transparent: true,
    opacity: state.sphereOpacity,
    side: THREE.DoubleSide
  };

  switch (state.shaderMode) {
    case "flat":
      return new THREE.MeshBasicMaterial({ ...common });
    case "toon":
      return new THREE.MeshBasicMaterial({ ...common });
    case "matte":
      return new THREE.MeshLambertMaterial({ ...common });
    case "wireframe":
      return new THREE.MeshBasicMaterial({ ...common, wireframe: true });
    case "normal":
      return new THREE.MeshNormalMaterial({ transparent: true, opacity: state.sphereOpacity, side: THREE.DoubleSide });
    case "current":
    default:
      return new THREE.MeshPhysicalMaterial({
        ...common,
        roughness: 0.15,
        metalness: 0,
        clearcoat: 0.35
      });
  }
}

function createSphereOutlineMaterial() {
  const material = new THREE.MeshBasicMaterial({
    color: state.toonOutlineColor,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    depthTest: !state.toonOutlineXray
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.outlineXray = { value: state.toonOutlineXray ? 1 : 0 };
    shader.uniforms.outlineDashed = { value: state.toonOutlineDashed ? 1 : 0 };
    shader.uniforms.outlineThickness = { value: Math.max(0.001, state.toonOutlineThickness) };
    shader.uniforms.outlineStageRadius = { value: 1 };
    shader.uniforms.outlineReferenceRadius = { value: 1 };
    shader.uniforms.outlineDashLength = { value: Math.max(0.01, state.toonOutlineDashLength) };
    shader.uniforms.outlineDashGap = { value: Math.max(0.01, state.toonOutlineDashGap) };
    shader.uniforms.outlineDashRepeat = { value: Math.max(1, state.toonOutlineDashRepeat) };

    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      "#include <common>\nvarying vec3 vOutlineViewNormal;\nvarying vec3 vOutlineViewPosition;\nvarying vec2 vSphereScreenCenter;\nvarying vec2 vFragNDC;"
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <project_vertex>",
      "#include <project_vertex>\nvOutlineViewPosition = mvPosition.xyz;\nvOutlineViewNormal = normalize(normalMatrix * position);\nvec4 centerClip = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);\nvSphereScreenCenter = centerClip.xy / centerClip.w;\nvec4 fragClip = projectionMatrix * mvPosition;\nvFragNDC = fragClip.xy / fragClip.w;"
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      "#include <common>\n#define OUTLINE_PI 3.141592653589793\nvarying vec3 vOutlineViewNormal;\nvarying vec3 vOutlineViewPosition;\nvarying vec2 vSphereScreenCenter;\nvarying vec2 vFragNDC;\nuniform int outlineXray;\nuniform int outlineDashed;\nuniform float outlineThickness;\nuniform float outlineStageRadius;\nuniform float outlineReferenceRadius;\nuniform float outlineDashLength;\nuniform float outlineDashGap;\nuniform float outlineDashRepeat;"
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      "if (outlineXray == 1) {\n  vec3 outlineViewDir = normalize(-vOutlineViewPosition);\n  float rim = 1.0 - abs(dot(normalize(vOutlineViewNormal), outlineViewDir));\n  float radiusComp = clamp(outlineReferenceRadius / max(outlineStageRadius, 1e-4), 0.35, 2.5);\n  float pxWidth = clamp(outlineThickness * 50.0 * radiusComp, 0.75, 10.0);\n  float pxDistFromEdge = (1.0 - rim) / max(fwidth(rim), 1e-4);\n  float rimMask = 1.0 - smoothstep(pxWidth, pxWidth + 1.0, pxDistFromEdge);\n  if (rimMask <= 0.001) discard;\n  diffuseColor.a *= rimMask;\n}\nif (outlineDashed == 1) {\n  vec2 dashDir;\n  if (outlineXray == 1) {\n    vec2 nxy = vOutlineViewNormal.xy;\n    dashDir = nxy / max(length(nxy), 1e-4);\n  } else {\n    vec2 sdir = vFragNDC - vSphereScreenCenter;\n    dashDir = sdir / max(length(sdir), 1e-4);\n  }\n  float angle = atan(dashDir.y, dashDir.x);\n  float dashT = fract((angle + OUTLINE_PI) / (2.0 * OUTLINE_PI) * outlineDashRepeat);\n  float onRatio = clamp(outlineDashLength / max(0.001, outlineDashLength + outlineDashGap), 0.02, 0.98);\n  if (dashT > onRatio) discard;\n}\n#include <dithering_fragment>"
    );

    material.userData.outlineShader = shader;
  };

  return material;
}

function updateSphereOutlineMaterialProps(material, stageRadius = 1) {
  material.depthTest = !state.toonOutlineXray;
  material.side = state.toonOutlineXray ? THREE.FrontSide : THREE.BackSide;
  material.color.copy(state.toonOutlineColor);
  const shader = material.userData?.outlineShader;
  if (shader?.uniforms) {
    shader.uniforms.outlineXray.value = state.toonOutlineXray ? 1 : 0;
    shader.uniforms.outlineDashed.value = state.toonOutlineDashed ? 1 : 0;
    shader.uniforms.outlineThickness.value = Math.max(0.001, state.toonOutlineThickness);
    shader.uniforms.outlineStageRadius.value = Math.max(0.0001, stageRadius);
    shader.uniforms.outlineReferenceRadius.value = Math.max(0.0001, stageRadii[0] ?? stageRadius ?? 1);
    shader.uniforms.outlineDashLength.value = Math.max(0.01, state.toonOutlineDashLength);
    shader.uniforms.outlineDashGap.value = Math.max(0.01, state.toonOutlineDashGap);
    shader.uniforms.outlineDashRepeat.value = Math.max(1, state.toonOutlineDashRepeat);
  }
}

function createConeMaterial() {
  const common = {
    color: state.coneColor,
    transparent: true,
    opacity: state.coneActiveOpacity,
    side: THREE.DoubleSide,
    depthWrite: false,
    depthTest: false
  };
  if (state.coneShaderMode === "wireframe") {
    return new THREE.MeshBasicMaterial({ ...common, wireframe: true });
  }
  if (state.coneShaderMode === "solid") {
    return new THREE.MeshLambertMaterial({ ...common });
  }
  return new THREE.MeshBasicMaterial({ ...common });
}

function applyConeMaterial() {
  stageConeMeshes.forEach((cone) => {
    const old = cone.material;
    cone.material = createConeMaterial();
    old.dispose();
  });
}

function applySphereShaderMode() {
  sphereMeshes.forEach((sphere, i) => {
    const old = sphere.material;
    sphere.material = createSphereMaterial(state.sphereStageColors[i]);
    old.dispose();
  });
}

function hash32(value) {
  let x = value >>> 0;
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
  x ^= x >>> 16;
  return x >>> 0;
}

function seedToUnit(seed, stream) {
  const mixed = (seed >>> 0) + Math.imul(stream + 1, 0x9e3779b9);
  return hash32(mixed) / 4294967296;
}

function generateStageRadii(count) {
  const baseRadius = 1.1;
  const step = 0.9;
  return Array.from({ length: count }, (_, i) => baseRadius + i * step);
}

function generateStageOffsets(seed, count) {
  const offsets = [];
  for (let i = 0; i < count; i += 1) {
    const angle = seedToUnit(seed, i * 2) * Math.PI * 2;
    const radius = 0.2 + Math.sqrt(seedToUnit(seed, i * 2 + 1)) * 0.9;
    offsets.push(new THREE.Vector2(Math.cos(angle) * radius, Math.sin(angle) * radius));
  }
  return offsets;
}

function ensureStageColors() {
  while (state.sphereStageColors.length < state.stageCount) {
    const fallback = colorFallbacks[state.sphereStageColors.length % colorFallbacks.length];
    state.sphereStageColors.push(new THREE.Color(fallback));
  }
  state.sphereStageColors = state.sphereStageColors.slice(0, state.stageCount);
}

function ensureStageNames() {
  while (state.stageNames.length < state.stageCount) {
    state.stageNames.push(`Stage ${state.stageNames.length + 1}`);
  }
  state.stageNames = state.stageNames.slice(0, state.stageCount);
}

function renameStage(index, name) {
  const trimmed = name.trim();
  if (!trimmed) {
    return;
  }
  state.stageNames[index] = trimmed;
  renderStageButtons();
}

function renderStageButtons() {
  stageBar.innerHTML = "";
  stageButtons = [];
  for (let i = 1; i <= state.stageCount; i += 1) {
    const chip = document.createElement("div");
    chip.className = "stage-chip";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "stage-btn";
    btn.dataset.stage = String(i);
    btn.textContent = state.stageNames[i - 1] || `Stage ${i}`;
    btn.title = "Double-click to rename";
    btn.addEventListener("click", () => {
      state.targetStage = i;
      updateStageButtons();
    });

    btn.addEventListener("dblclick", () => {
      const currentName = state.stageNames[i - 1] || `Stage ${i}`;
      const nextName = window.prompt(`Rename Stage ${i}`, currentName);
      if (nextName === null) {
        return;
      }
      renameStage(i - 1, nextName);
    });

    chip.appendChild(btn);

    stageBar.appendChild(chip);
    stageButtons.push(btn);
  }

  if (state.stageCount > state.stageMin) {
    const removeChip = document.createElement("div");
    removeChip.className = "stage-chip stage-remove-chip";

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "stage-remove-btn";
    removeBtn.setAttribute("aria-label", "Remove last stage");
    removeBtn.title = "Remove last stage";
    removeBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false">
        <path d="M6 12h12"></path>
      </svg>
    `;
    removeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      state.stageCount -= 1;
      ensureStageNames();
      ensureStageColors();
      rebuildStageGeometry();
    });

    removeChip.appendChild(removeBtn);
    stageBar.appendChild(removeChip);
  }

  addStageBtn.disabled = state.stageCount >= state.stageMax;
  updateStageButtons();
}

function renderStageColorInputs() {
  stageColorList.innerHTML = "";
  state.sphereStageColors.forEach((color, index) => {
    const input = document.createElement("input");
    input.type = "color";
    input.value = `#${color.getHexString()}`;
    input.setAttribute("aria-label", `Stage ${index + 1} color`);
    input.addEventListener("input", () => {
      state.sphereStageColors[index] = new THREE.Color(input.value);
    });
    stageColorList.appendChild(input);
  });
}

function disposeMeshArray(arr) {
  arr.forEach((mesh) => {
    scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
  });
}

function rebuildStageGeometry() {
  stageRadii = generateStageRadii(state.stageCount);
  stageOffsets = generateStageOffsets(state.seedValue, state.stageCount);

  disposeMeshArray(sphereMeshes);
  disposeMeshArray(sphereOutlineMeshes);
  disposeMeshArray(hitDots);
  disposeMeshArray(hitDotOutlines);
  disposeMeshArray(stageConeMeshes);
  sphereMeshes = [];
  sphereOutlineMeshes = [];
  hitDots = [];
  hitDotOutlines = [];
  stageConeMeshes = [];

  const sphereGeom = new THREE.SphereGeometry(1, 64, 64);
  for (let i = 0; i < state.stageCount; i += 1) {
    const sphere = new THREE.Mesh(sphereGeom, createSphereMaterial(state.sphereStageColors[i]));
    sphere.scale.setScalar(stageRadii[i]);
    scene.add(sphere);
    sphereMeshes.push(sphere);

    const outline = new THREE.Mesh(
      sphereGeom,
      createSphereOutlineMaterial()
    );
    outline.renderOrder = 7;
    scene.add(outline);
    sphereOutlineMeshes.push(outline);

    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(state.hitDotSize, 24, 24),
      createDotMaterial(state.hitDotColor)
    );
    dot.renderOrder = 10;
    scene.add(dot);
    hitDots.push(dot);

    const dotOutline = new THREE.Mesh(
      new THREE.SphereGeometry(state.hitDotSize, 24, 24),
      createDotOutlineMaterial(state.dotOutlineColor)
    );
    dotOutline.renderOrder = 9;
    scene.add(dotOutline);
    hitDotOutlines.push(dotOutline);

    const cone = new THREE.Mesh(baseConeGeometry, createConeMaterial());
    cone.renderOrder = 3;
    scene.add(cone);
    stageConeMeshes.push(cone);
  }

  state.targetStage = THREE.MathUtils.clamp(state.targetStage, 1, state.stageCount);
  state.animatedStage = THREE.MathUtils.clamp(state.animatedStage, 1, state.stageCount);
  stageCountValue.textContent = String(state.stageCount);
  renderStageButtons();
  renderStageColorInputs();
}

function buildPerpendicularBasis(direction) {
  const fallback = Math.abs(direction.y) < 0.92 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
  const right = new THREE.Vector3().crossVectors(direction, fallback).normalize();
  const up = new THREE.Vector3().crossVectors(right, direction).normalize();
  return { right, up };
}

function getConeAngleForStage(stageIndex) {
  const degrees = THREE.MathUtils.clamp(state.coneDegrees * Math.pow(state.coneRatio, stageIndex), 0.5, 89.5);
  return THREE.MathUtils.degToRad(degrees);
}

function getStageDirections() {
  const baseBasis = buildPerpendicularBasis(baseDirection);
  const dirs = [];

  for (let i = 0; i < stageOffsets.length; i++) {
    const offset = stageOffsets[i];

    if (!state.angleLimiter || i === 0) {
      // Original behaviour: all stages relative to the global baseDirection
      const { right, up } = baseBasis;
      const influence = Math.tan(getConeAngleForStage(i) * 0.8);
      const perp = new THREE.Vector3()
        .addScaledVector(right, offset.x)
        .addScaledVector(up, offset.y)
        .multiplyScalar(influence);
      dirs.push(baseDirection.clone().add(perp).normalize());
    } else {
      // Angle-limiter mode: each stage is relative to the previous stage's direction.
      // The axis deviation is capped so the stage-i cone fits entirely inside the
      // stage-(i-1) cone: maxDev = coneAngle(i-1) - coneAngle(i).
      const prevDir = dirs[i - 1];
      const { right, up } = buildPerpendicularBasis(prevDir);
      const prevAngle = getConeAngleForStage(i - 1);
      const currAngle = getConeAngleForStage(i);
      const maxDev = Math.max(0, prevAngle - currAngle);

      // Scale offset so its peak (mag ≥ 1) maps to the maximum allowed deviation.
      // Offsets with smaller magnitude land proportionally closer to the axis,
      // preserving seed-driven variation within the constrained region.
      const offsetMag = Math.hypot(offset.x, offset.y);
      const influence = Math.tan(maxDev);
      const scale = offsetMag > 0 ? influence / Math.max(offsetMag, 1) : 0;

      const perp = new THREE.Vector3()
        .addScaledVector(right, offset.x * scale)
        .addScaledVector(up, offset.y * scale);
      dirs.push(prevDir.clone().add(perp).normalize());
    }
  }

  return dirs;
}

function stageLerpInfo() {
  const lower = Math.floor(state.animatedStage);
  const upper = Math.min(state.stageCount, lower + 1);
  const mix = THREE.MathUtils.clamp(state.animatedStage - lower, 0, 1);
  return { lower, upper, mix };
}

function getLerpedDirection(dirs) {
  const { lower, upper, mix } = stageLerpInfo();
  const a = dirs[Math.max(0, lower - 1)];
  const b = dirs[Math.max(0, upper - 1)];
  return new THREE.Vector3().copy(a).lerp(b, mix).normalize();
}

function getLerpedRadius() {
  const { lower, upper, mix } = stageLerpInfo();
  const a = stageRadii[Math.max(0, lower - 1)];
  const b = stageRadii[Math.max(0, upper - 1)];
  return THREE.MathUtils.lerp(a, b, mix);
}

function updateStageButtons() {
  stageButtons.forEach((btn) => {
    btn.classList.toggle("is-active", Number(btn.dataset.stage) === state.targetStage);
  });
}

function updateTubeMesh(mesh, points, radius, color, opacity, closed) {
  const usable = points.length >= 2 ? points : [new THREE.Vector3(), new THREE.Vector3(0, 0.001, 0)];
  const curve = new THREE.CatmullRomCurve3(usable, closed);
  const segments = Math.max(8, usable.length * 18);
  mesh.geometry.dispose();
  mesh.geometry = new THREE.TubeGeometry(curve, segments, radius, 10, closed);
  mesh.material.color.copy(color);
  mesh.material.opacity = opacity;
}

function rebuildAxisMeshes() {
  disposeMeshArray(axisMeshes);
  axisMeshes = [];

  const axisDefs = [
    [new THREE.Vector3(-1, 0, 0), new THREE.Vector3(1, 0, 0)],
    [new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 1, 0)],
    [new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, 1)]
  ];

  axisDefs.forEach(([a, b]) => {
    const mesh = createTubeMesh(state.axisColor, 0.95);
    mesh.renderOrder = 1;
    scene.add(mesh);
    axisMeshes.push(mesh);

    const p0 = a.clone().multiplyScalar(state.axisLength);
    const p1 = b.clone().multiplyScalar(state.axisLength);
    updateTubeMesh(mesh, [p0, p1], state.axisThickness, state.axisColor, 0.95, false);
  });
}

function updateAxesVisibility() {
  axisMeshes.forEach((mesh) => {
    mesh.visible = state.showAxes;
  });
}

function updateDotGeometry(mesh, size) {
  mesh.geometry.dispose();
  mesh.geometry = new THREE.SphereGeometry(size, 24, 24);
}

function buildConfigSnapshot() {
  return {
    activeStage: Math.max(1, Math.round(state.targetStage)),
    stageCount: state.stageCount,
    stageNames: [...state.stageNames],
    seed: state.seedValue,
    autoApplySeed: state.autoApplySeed,
    coneDegrees: state.coneDegrees,
    coneRatio: state.coneRatio,
    coneExtension: state.coneExtension,
    showConeHistory: state.showConeHistory,
    showSpheres: state.showSpheres,
    showConnectors: state.showConnectors,
    sphereOpacity: state.sphereOpacity,
    shaderMode: state.shaderMode,
    toonOutline: {
      show: state.showToonOutline,
      color: `#${state.toonOutlineColor.getHexString()}`,
      thickness: state.toonOutlineThickness,
      xray: state.toonOutlineXray,
      dashed: state.toonOutlineDashed,
      dashLength: state.toonOutlineDashLength,
      dashGap: state.toonOutlineDashGap,
      dashRepeat: state.toonOutlineDashRepeat
    },
    sphereStageColors: state.sphereStageColors.map((c) => `#${c.getHexString()}`),
    coneHistory: {
      shaderMode: state.coneShaderMode,
      originMode: state.coneOriginMode,
      angleLimiter: state.angleLimiter,
      color: `#${state.coneColor.getHexString()}`,
      activeOpacity: state.coneActiveOpacity,
      inactiveOpacity: state.coneInactiveOpacity
    },
    coneIntersection: {
      show: state.showIntersection,
      color: `#${state.intersectionColor.getHexString()}`,
      width: state.intersectionWidth
    },
    initialConeIntersection: {
      show: state.showInitialIntersection,
      color: `#${state.initialIntersectionColor.getHexString()}`,
      width: state.initialIntersectionWidth
    },
    arrow: {
      show: state.showArrow,
      color: `#${state.arrowColor.getHexString()}`,
      thickness: state.arrowThickness,
      extension: state.arrowExtension,
      headLength: state.arrowHeadLength,
      headWidth: state.arrowHeadWidth,
      opacity: state.arrowOpacity
    },
    initialArrow: {
      show: state.showInitialArrow,
      color: `#${state.initialArrowColor.getHexString()}`,
      thickness: state.initialArrowThickness,
      extension: state.initialArrowExtension,
      headLength: state.initialArrowHeadLength,
      headWidth: state.initialArrowHeadWidth,
      opacity: state.initialArrowOpacity
    },
    connectors: {
      color: `#${state.connectorColor.getHexString()}`,
      thickness: state.connectorThickness,
      opacity: state.connectorOpacity
    },
    dots: {
      originColor: `#${state.originDotColor.getHexString()}`,
      originSize: state.originDotSize,
      hitColor: `#${state.hitDotColor.getHexString()}`,
      hitSize: state.hitDotSize,
      outline: {
        show: state.showDotOutline,
        color: `#${state.dotOutlineColor.getHexString()}`,
        thickness: state.dotOutlineThickness
      }
    },
    axes: {
      show: state.showAxes,
      color: `#${state.axisColor.getHexString()}`,
      length: state.axisLength,
      thickness: state.axisThickness
    },
    baseDirection: {
      azimuth: state.dirAzimuth,
      elevation: state.dirElevation
    },
    fog: {
      show: state.showFog,
      density: state.fogDensity
    },
    display: {
      mode: state.displayMode,
      gridAspectRatio: state.gridAspectRatio,
      gridOuterMargin: state.gridOuterMargin,
      gridCellGap: state.gridCellGap,
      gridBorder: {
        show: state.gridBorderShow,
        color: `#${state.gridBorderColor.getHexString()}`,
        thickness: state.gridBorderThickness
      },
      gridNumber: {
        show: state.gridNumberShow,
        font: state.gridNumberFont,
        color: `#${state.gridNumberColor.getHexString()}`,
        size: state.gridNumberSize,
        margin: state.gridNumberMargin,
        placement: state.gridNumberPlacement
      },
      gridLabel: {
        show: state.gridLabelShow,
        font: state.gridLabelFont,
        color: `#${state.gridLabelColor.getHexString()}`,
        size: state.gridLabelSize,
        margin: state.gridLabelMargin,
        placement: state.gridLabelPlacement
      }
    },
    camera: {
      type: state.cameraType,
      fov: state.cameraFov,
      zoom: state.cameraZoom,
      position: {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z
      }
    }
  };
}

function updateScene() {
  const dirs = getStageDirections();
  const maxVisibleStage = Math.max(1, Math.round(state.animatedStage));
  const stagePoints = stageRadii.map((r, i) => new THREE.Vector3().copy(dirs[i]).multiplyScalar(r));

  sphereMeshes.forEach((mesh, index) => {
    const stage = index + 1;
    const activeDistance = Math.abs(state.animatedStage - stage);
    mesh.visible = state.showSpheres && stage <= maxVisibleStage;
    mesh.material.opacity = state.sphereOpacity * THREE.MathUtils.clamp(1 - activeDistance * 0.45, 0.2, 1);
    if (mesh.material.color) {
      mesh.material.color.copy(state.sphereStageColors[index]);
    }
  });

  sphereOutlineMeshes.forEach((outline, index) => {
    const stage = index + 1;
    const visible = state.showSpheres && stage <= maxVisibleStage && state.showToonOutline;
    outline.visible = visible;
    outline.scale.setScalar(
      state.toonOutlineXray
        ? stageRadii[index]
        : stageRadii[index] + state.toonOutlineThickness
    );
    updateSphereOutlineMaterialProps(outline.material, stageRadii[index]);
    outline.material.opacity = stage === state.targetStage ? 1 : 0.78;
  });

  originDot.material.color.copy(state.originDotColor);
  hitDots.forEach((dot, i) => {
    dot.material.color.copy(state.hitDotColor);
    dot.position.copy(stagePoints[i]);
    dot.visible = i + 1 <= maxVisibleStage;
  });

  originDotOutline.position.copy(originDot.position);
  originDotOutline.scale.setScalar((state.originDotSize + state.dotOutlineThickness) / state.originDotSize);
  originDotOutline.material.color.copy(state.dotOutlineColor);
  originDotOutline.visible = state.showDotOutline;

  hitDotOutlines.forEach((outline, i) => {
    const stage = i + 1;
    outline.position.copy(stagePoints[i]);
    outline.scale.setScalar((state.hitDotSize + state.dotOutlineThickness) / state.hitDotSize);
    outline.material.color.copy(state.dotOutlineColor);
    outline.visible = state.showDotOutline && stage <= maxVisibleStage;
  });

  const currentRadius = getLerpedRadius();
  const directionNow = getLerpedDirection(dirs);
  const currentPoint = new THREE.Vector3().copy(directionNow).multiplyScalar(currentRadius);

  arrow.visible = state.showArrow;
  if (state.showArrow) {
    const totalLength = currentRadius + state.arrowExtension;
    const shaftEnd = directionNow.clone().multiplyScalar(Math.max(0, totalLength - state.arrowHeadLength));
    updateTubeMesh(arrowShaft, [new THREE.Vector3(), shaftEnd], state.arrowThickness, state.arrowColor, state.arrowOpacity, false);
    arrowShaft.material.depthTest = false;
    arrowHead.material.color.copy(state.arrowColor);
    arrowHead.material.opacity = state.arrowOpacity;
    arrowHead.position.copy(directionNow).multiplyScalar(totalLength - state.arrowHeadLength / 2);
    arrowHead.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), directionNow);
  }

  const initialDirection = dirs[0] ?? baseDirection;
  const initialRadius = stageRadii[Math.max(0, maxVisibleStage - 1)] ?? 0;
  initialArrow.visible = state.showInitialArrow && state.targetStage > 1;
  if (state.showInitialArrow && state.targetStage > 1) {
    const initialLength = initialRadius + state.initialArrowExtension;
    const shaftEnd = initialDirection.clone().multiplyScalar(Math.max(0, initialLength - state.initialArrowHeadLength));
    updateTubeMesh(initialArrowShaft, [new THREE.Vector3(), shaftEnd], state.initialArrowThickness, state.initialArrowColor, state.initialArrowOpacity, false);
    initialArrowShaft.material.depthTest = false;
    initialArrowHead.material.color.copy(state.initialArrowColor);
    initialArrowHead.material.opacity = state.initialArrowOpacity;
    initialArrowHead.position.copy(initialDirection).multiplyScalar(initialLength - state.initialArrowHeadLength / 2);
    initialArrowHead.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), initialDirection);
  }

  const stagePointsVisible = stagePoints.slice(0, Math.max(1, maxVisibleStage));
  const origin = new THREE.Vector3();

  const hasSequentialSegments = stagePointsVisible.length > 0;
  pathConnector.visible = state.showConnectors && hasSequentialSegments;

  if (hasSequentialSegments) {
    const sequencePoints = [origin, ...stagePointsVisible];
    updateTubeMesh(pathConnector, sequencePoints, state.connectorThickness, state.connectorColor, state.connectorOpacity, false);
  }

  const fromDot = state.coneOriginMode === "dot";
  const activeIndex = state.targetStage - 1;
  const activeConeAngle = getConeAngleForStage(activeIndex);

  // Compute cone apex and direction per-stage for both modes
  const coneApexes = stagePoints.map((pt, i) => fromDot && i > 0 ? stagePoints[i - 1].clone() : new THREE.Vector3());
  const coneDirs = stagePoints.map((pt, i) => {
    if (fromDot && i > 0) {
      const d = pt.clone().sub(coneApexes[i]);
      return d.lengthSq() > 1e-10 ? d.normalize() : dirs[i];
    }
    return dirs[i];
  });
  const coneDists = stagePoints.map((pt, i) =>
    fromDot && i > 0 ? pt.distanceTo(coneApexes[i]) : stageRadii[i]
  );

  // Intersection ring for active stage
  const ringDist = coneDists[activeIndex];
  const ringDir = coneDirs[activeIndex];
  const ringApex = coneApexes[activeIndex];
  const { right, up } = buildPerpendicularBasis(ringDir);
  const ringCenter = ringApex.clone().addScaledVector(ringDir, ringDist * Math.cos(activeConeAngle));
  const ringRadius = ringDist * Math.sin(activeConeAngle);
  const ringSegments = 96;
  const ringPoints = [];

  for (let i = 0; i < ringSegments; i += 1) {
    const t = (i / ringSegments) * Math.PI * 2;
    ringPoints.push(
      ringCenter.clone()
        .addScaledVector(right, Math.cos(t) * ringRadius)
        .addScaledVector(up, Math.sin(t) * ringRadius)
    );
  }

  coneIntersection.visible = state.showIntersection;
  updateTubeMesh(coneIntersection, ringPoints, state.intersectionWidth, state.intersectionColor, 0.95, true);

  const outerMostVisibleIndex = Math.max(0, maxVisibleStage - 1);
  const outerMostRadius = stageRadii[outerMostVisibleIndex] ?? stageRadii[0] ?? 0;
  const initialConeAngle = getConeAngleForStage(0);
  const initialRingDir = coneDirs[0] ?? baseDirection;
  const initialRingApex = new THREE.Vector3();
  const initialRingCenter = initialRingApex.clone().addScaledVector(initialRingDir, outerMostRadius * Math.cos(initialConeAngle));
  const initialRingRadius = outerMostRadius * Math.sin(initialConeAngle);
  const initialBasis = buildPerpendicularBasis(initialRingDir);
  const initialRingPoints = [];

  for (let i = 0; i < ringSegments; i += 1) {
    const t = (i / ringSegments) * Math.PI * 2;
    initialRingPoints.push(
      initialRingCenter.clone()
        .addScaledVector(initialBasis.right, Math.cos(t) * initialRingRadius)
        .addScaledVector(initialBasis.up, Math.sin(t) * initialRingRadius)
    );
  }

  const hasVisibleSphere = state.showSpheres && maxVisibleStage >= 1;
  initialConeIntersection.visible = state.showInitialIntersection && hasVisibleSphere;
  updateTubeMesh(initialConeIntersection, initialRingPoints, state.initialIntersectionWidth, state.initialIntersectionColor, 0.95, true);

  stageConeMeshes.forEach((cone, i) => {
    const stage = i + 1;
    const coneAngle = getConeAngleForStage(i);
    const dist = coneDists[i];
    const calcDepth = dist * Math.cos(coneAngle);
    const visualConeHeight = Math.max(0.001, calcDepth * (1 + state.coneExtension));
    const coneRadius = Math.tan(coneAngle) * visualConeHeight;

    cone.visible = state.showConeHistory && stage <= maxVisibleStage;
    cone.scale.set(coneRadius, visualConeHeight, coneRadius);
    cone.position.copy(coneApexes[i]);
    cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), coneDirs[i]);
    cone.material.color.copy(state.coneColor);
    cone.material.opacity = stage === state.targetStage ? state.coneActiveOpacity : state.coneInactiveOpacity;
  });
}

function updateCameraType() {
  const aspect = canvas.clientWidth / canvas.clientHeight;

  if (state.cameraType === "orthographic") {
    const scale = state.cameraZoom;
    orthographicCamera.left = -aspect * scale;
    orthographicCamera.right = aspect * scale;
    orthographicCamera.top = scale;
    orthographicCamera.bottom = -scale;
    orthographicCamera.position.copy(perspectiveCamera.position);
    orthographicCamera.quaternion.copy(perspectiveCamera.quaternion);
    orthographicCamera.updateProjectionMatrix();
    camera = orthographicCamera;
    controls.object = orthographicCamera;
  } else {
    perspectiveCamera.fov = state.cameraFov;
    perspectiveCamera.aspect = aspect;
    perspectiveCamera.position.copy(orthographicCamera.position);
    perspectiveCamera.quaternion.copy(orthographicCamera.quaternion);
    perspectiveCamera.updateProjectionMatrix();
    camera = perspectiveCamera;
    controls.object = perspectiveCamera;
  }
}

function resetCameraTo3_4View() {
  camera.position.copy(defaultCameraPosition);
  controls.target.copy(defaultCameraTarget);
  controls.update();
}

function ensureOverlayCanvasSize(width, height) {
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const pixelWidth = Math.round(width * dpr);
  const pixelHeight = Math.round(height * dpr);
  if (gridBorderOverlay.width !== pixelWidth || gridBorderOverlay.height !== pixelHeight) {
    gridBorderOverlay.width = pixelWidth;
    gridBorderOverlay.height = pixelHeight;
    gridBorderCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
}

function createRenderCameraForAspect(aspect) {
  const safeAspect = Math.max(0.0001, aspect);
  if (camera.isOrthographicCamera) {
    const tempCamera = new THREE.OrthographicCamera(
      -safeAspect * state.cameraZoom,
      safeAspect * state.cameraZoom,
      state.cameraZoom,
      -state.cameraZoom,
      camera.near,
      camera.far
    );
    tempCamera.position.copy(camera.position);
    tempCamera.quaternion.copy(camera.quaternion);
    tempCamera.zoom = camera.zoom;
    tempCamera.updateProjectionMatrix();
    return tempCamera;
  }

  const tempCamera = new THREE.PerspectiveCamera(
    camera.fov,
    safeAspect,
    camera.near,
    camera.far
  );
  tempCamera.position.copy(camera.position);
  tempCamera.quaternion.copy(camera.quaternion);
  tempCamera.zoom = camera.zoom;
  tempCamera.updateProjectionMatrix();
  return tempCamera;
}

function parseGridAspectRatio(value) {
  if (!value || value === "free") {
    return null;
  }
  const parts = value.split(":").map(Number);
  if (parts.length !== 2 || parts.some((n) => !Number.isFinite(n) || n <= 0)) {
    return null;
  }
  return parts[0] / parts[1];
}

function computeGridLayout(totalWidth, totalHeight, topInset = 0) {
  const cols = Math.max(1, Math.ceil(Math.sqrt(state.stageCount)));
  const rows = Math.max(1, Math.ceil(state.stageCount / cols));
  const ratio = parseGridAspectRatio(state.gridAspectRatio);

  let frameX = 0;
  let frameY = Math.max(0, topInset);
  let frameWidth = totalWidth;
  let frameHeight = Math.max(1, totalHeight - frameY);

  if (ratio) {
    const frameRatio = totalWidth / Math.max(1, totalHeight);
    if (frameRatio > ratio) {
      frameHeight = totalHeight;
      frameWidth = frameHeight * ratio;
      frameX = (totalWidth - frameWidth) / 2;
    } else {
      frameWidth = totalWidth;
      frameHeight = frameWidth / ratio;
      frameY = (totalHeight - frameHeight) / 2;
    }
  }

  const outerMargin = Math.max(0, Math.round(state.gridOuterMargin));
  const gap = Math.max(0, Math.round(state.gridCellGap));

  const usableWidth = Math.max(1, Math.floor(frameWidth - outerMargin * 2 - gap * (cols - 1)));
  const usableHeight = Math.max(1, Math.floor(frameHeight - outerMargin * 2 - gap * (rows - 1)));

  const baseCellWidth = Math.floor(usableWidth / cols);
  const extraWidth = usableWidth - baseCellWidth * cols;
  const baseCellHeight = Math.floor(usableHeight / rows);
  const extraHeight = usableHeight - baseCellHeight * rows;

  const colWidths = Array.from({ length: cols }, (_, i) => baseCellWidth + (i < extraWidth ? 1 : 0));
  const rowHeights = Array.from({ length: rows }, (_, i) => baseCellHeight + (i < extraHeight ? 1 : 0));

  const colStarts = [];
  let xCursor = Math.round(frameX) + outerMargin;
  for (let c = 0; c < cols; c += 1) {
    colStarts.push(xCursor);
    xCursor += colWidths[c] + gap;
  }

  const rowStarts = [];
  let yCursor = Math.round(frameY) + outerMargin;
  for (let r = 0; r < rows; r += 1) {
    rowStarts.push(yCursor);
    yCursor += rowHeights[r] + gap;
  }

  const cells = [];
  for (let i = 0; i < state.stageCount; i += 1) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    cells.push({
      col,
      row,
      x: colStarts[col],
      y: rowStarts[row],
      width: colWidths[col],
      height: rowHeights[row]
    });
  }

  return { cols, rows, gap, cells };
}

function drawGridBorders(ctx, layout, borderThickness, borderColorHex) {
  ctx.strokeStyle = borderColorHex;
  ctx.lineWidth = borderThickness;
  ctx.lineCap = layout.gap === 0 ? "square" : "butt";
  ctx.lineJoin = "miter";
  ctx.beginPath();

  const segments = new Map();
  const addSegment = (x1, y1, x2, y2) => {
    const isVertical = Math.abs(x1 - x2) < 1e-6;
    let a1 = x1;
    let b1 = y1;
    let a2 = x2;
    let b2 = y2;

    if (isVertical && b2 < b1) {
      b1 = y2;
      b2 = y1;
    }
    if (!isVertical && a2 < a1) {
      a1 = x2;
      a2 = x1;
    }

    const key = `${a1.toFixed(4)},${b1.toFixed(4)},${a2.toFixed(4)},${b2.toFixed(4)}`;
    segments.set(key, { x1: a1, y1: b1, x2: a2, y2: b2 });
  };

  const half = borderThickness / 2;
  const inset = layout.gap === 0 ? 0 : half;

  for (const cell of layout.cells) {
    const left = cell.x + inset;
    const top = cell.y + inset;
    const right = cell.x + cell.width - inset;
    const bottom = cell.y + cell.height - inset;

    if (right <= left || bottom <= top) {
      continue;
    }

    addSegment(left, top, right, top);
    addSegment(right, top, right, bottom);
    addSegment(right, bottom, left, bottom);
    addSegment(left, bottom, left, top);
  }

  for (const segment of segments.values()) {
    ctx.moveTo(segment.x1, segment.y1);
    ctx.lineTo(segment.x2, segment.y2);
  }

  ctx.stroke();
}

function getPlacementPosition(cell, placement, padding) {
  const safePlacement = typeof placement === "string" ? placement : "top-middle";
  const [vertical, horizontal] = safePlacement.split("-");

  const textAlign = horizontal === "left" ? "left" : horizontal === "right" ? "right" : "center";
  const textBaseline = vertical === "bottom" ? "bottom" : "top";

  let x = cell.x + cell.width / 2;
  if (textAlign === "left") {
    x = cell.x + padding;
  } else if (textAlign === "right") {
    x = cell.x + cell.width - padding;
  }

  const y = textBaseline === "top"
    ? cell.y + padding
    : cell.y + cell.height - padding;

  return { x, y, textAlign, textBaseline };
}

function clampTextToCell(ctx, text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) {
    return text;
  }
  const ellipsis = "...";
  let lo = 0;
  let hi = text.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    const candidate = `${text.slice(0, mid)}${ellipsis}`;
    if (ctx.measureText(candidate).width <= maxWidth) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }
  return `${text.slice(0, lo)}${ellipsis}`;
}

function drawGridTextAnnotations(ctx, layout, textScale = 1) {
  if (state.gridNumberShow) {
    ctx.fillStyle = `#${state.gridNumberColor.getHexString()}`;
    ctx.font = `${Math.max(1, state.gridNumberSize * textScale)}px ${state.gridNumberFont}`;
    for (let i = 0; i < layout.cells.length; i += 1) {
      const cell = layout.cells[i];
      const padding = (state.gridNumberMargin + state.gridBorderThickness) * textScale;
      const pos = getPlacementPosition(cell, state.gridNumberPlacement, padding);
      ctx.textAlign = pos.textAlign;
      ctx.textBaseline = pos.textBaseline;
      ctx.fillText(String(i + 1), pos.x, pos.y);
    }
  }

  if (state.gridLabelShow) {
    ctx.fillStyle = `#${state.gridLabelColor.getHexString()}`;
    ctx.font = `${Math.max(1, state.gridLabelSize * textScale)}px ${state.gridLabelFont}`;
    for (let i = 0; i < layout.cells.length; i += 1) {
      const cell = layout.cells[i];
      const label = state.stageNames[i] || `Stage ${i + 1}`;
      const padding = (state.gridLabelMargin + state.gridBorderThickness) * textScale;
      const pos = getPlacementPosition(cell, state.gridLabelPlacement, padding);
      ctx.textAlign = pos.textAlign;
      ctx.textBaseline = pos.textBaseline;

      const maxWidth = Math.max(8, cell.width - padding * 2);
      const renderedText = clampTextToCell(ctx, String(label), maxWidth);
      ctx.fillText(renderedText, pos.x, pos.y, maxWidth);
    }
  }
}

function renderGridView() {
  const width = Math.max(1, canvas.clientWidth);
  const height = Math.max(1, canvas.clientHeight);
  const wrapRect = sceneWrap.getBoundingClientRect();
  const uiRect = sceneUi.getBoundingClientRect();
  const topInset = Math.max(0, Math.round(uiRect.bottom - wrapRect.top + 8));
  const layout = computeGridLayout(width, height, topInset);

  renderer.setClearColor(0xffffff);

  const savedTargetStage = state.targetStage;
  const savedAnimatedStage = state.animatedStage;

  for (let i = 0; i < layout.cells.length; i += 1) {
    const cell = layout.cells[i];
    const drawWidth = Math.max(1, cell.width);
    const drawHeight = Math.max(1, cell.height);
    const x = Math.round(cell.x);
    const y = Math.round(height - (cell.y + cell.height));

    renderer.setViewport(x, y, drawWidth, drawHeight);
    renderer.setScissor(x, y, drawWidth, drawHeight);
    renderer.setScissorTest(true);

    const cellAspect = drawWidth / Math.max(1, drawHeight);
    const tempCamera = createRenderCameraForAspect(cellAspect);

    state.targetStage = i + 1;
    state.animatedStage = i + 1;
    updateScene();

    renderer.render(scene, tempCamera);
  }

  state.targetStage = savedTargetStage;
  state.animatedStage = savedAnimatedStage;
  updateScene();

  renderer.setScissorTest(false);
  renderer.setViewport(0, 0, width, height);

  // Draw grid borders on the 2D overlay canvas.
  ensureOverlayCanvasSize(width, height);
  gridBorderCtx.clearRect(0, 0, width, height);
  if (state.gridBorderShow && state.stageCount > 0) {
    drawGridBorders(
      gridBorderCtx,
      layout,
      state.gridBorderThickness,
      `#${state.gridBorderColor.getHexString()}`
    );
  }

  if ((state.gridNumberShow || state.gridLabelShow) && state.stageCount > 0) {
    drawGridTextAnnotations(gridBorderCtx, layout, 1);
  }
}

function updateSceneWrapHeightForGridMode() {
  if (state.displayMode !== "grid") {
    if (sceneWrap.style.height) {
      sceneWrap.style.removeProperty("height");
    }
    return;
  }

  const width = Math.max(1, sceneWrap.clientWidth);
  const cols = Math.max(1, Math.ceil(Math.sqrt(state.stageCount)));
  const rows = Math.max(1, Math.ceil(state.stageCount / cols));
  const targetRatio = parseGridAspectRatio(state.gridAspectRatio) ?? (cols / rows);
  const wrapRect = sceneWrap.getBoundingClientRect();
  const uiRect = sceneUi.getBoundingClientRect();
  const topInset = Math.max(0, Math.round(uiRect.bottom - wrapRect.top + 8));
  const isNarrowViewport = window.matchMedia("(max-width: 700px)").matches;
  const baseMinHeight = isNarrowViewport ? 360 : 420;
  const minCellHeight = isNarrowViewport ? 140 : 190;
  const gap = Math.max(0, Math.round(state.gridCellGap));
  const outerMargin = Math.max(0, Math.round(state.gridOuterMargin));
  const desiredGridHeight = Math.ceil(width / Math.max(0.01, targetRatio));
  const minRowsHeight = rows * minCellHeight + gap * Math.max(0, rows - 1) + outerMargin * 2;
  const desiredHeight = Math.max(baseMinHeight, topInset + desiredGridHeight, topInset + minRowsHeight);

  const currentInlineHeight = Number.parseFloat(sceneWrap.style.height);
  if (!Number.isFinite(currentInlineHeight) || Math.abs(currentInlineHeight - desiredHeight) > 1) {
    sceneWrap.style.height = `${desiredHeight}px`;
  }
}

function animate() {
  state.animatedStage = THREE.MathUtils.damp(state.animatedStage, state.targetStage, 6, 1 / 60);
  updateScene();
  controls.update();

  if (state.displayMode === "grid") {
    renderGridView();
  } else {
    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);
}

function onResize() {
  updateSceneWrapHeightForGridMode();

  const width = sceneWrap.clientWidth;
  const height = sceneWrap.clientHeight;
  if (width <= 0 || height <= 0) {
    return;
  }

  const aspect = width / height;

  if (state.cameraType === "perspective") {
    perspectiveCamera.aspect = aspect;
    perspectiveCamera.updateProjectionMatrix();
  } else {
    const scale = state.cameraZoom;
    orthographicCamera.left = -aspect * scale;
    orthographicCamera.right = aspect * scale;
    orthographicCamera.top = scale;
    orthographicCamera.bottom = -scale;
    orthographicCamera.updateProjectionMatrix();
  }

  renderer.setSize(width, height, false);
}

function timestampForFilename() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function downloadHiResPng(scale = 3) {
  const parent = canvas.parentElement;
  const targetWidth = Math.max(1, Math.round(parent.clientWidth * scale));
  const targetHeight = Math.max(1, Math.round(parent.clientHeight * scale));

  const previousSize = new THREE.Vector2();
  renderer.getSize(previousSize);
  const previousPixelRatio = renderer.getPixelRatio();
  downloadPngBtn.disabled = true;

  try {
    renderer.setPixelRatio(1);
    renderer.setSize(targetWidth, targetHeight, false);
    const tempCamera = createRenderCameraForAspect(targetWidth / targetHeight);

    updateScene();
    renderer.render(scene, tempCamera);

    const dataUrl = renderer.domElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `creative-process-${timestampForFilename()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } finally {
    renderer.setPixelRatio(previousPixelRatio);
    renderer.setSize(previousSize.x, previousSize.y, false);
    updateScene();
    controls.update();
    renderer.render(scene, camera);
    downloadPngBtn.disabled = false;
  }
}

function downloadGridPng(scale = 3) {
  const parent = canvas.parentElement;
  const parentWidth = Math.max(1, parent.clientWidth);
  const parentHeight = Math.max(1, parent.clientHeight);

  let targetWidth, targetHeight;
  const ratio = state.gridAspectRatio;
  if (ratio === "free") {
    targetWidth = Math.round(parentWidth * scale);
    targetHeight = Math.round(parentHeight * scale);
  } else {
    const [rw, rh] = ratio.split(":").map(Number);
    const baseWidth = parentWidth * scale;
    const baseHeight = parentHeight * scale;
    if (baseWidth / baseHeight > rw / rh) {
      targetHeight = Math.round(baseHeight);
      targetWidth = Math.round(targetHeight * (rw / rh));
    } else {
      targetWidth = Math.round(baseWidth);
      targetHeight = Math.round(targetWidth * (rh / rw));
    }
  }

  const previousSize = new THREE.Vector2();
  renderer.getSize(previousSize);
  const previousPixelRatio = renderer.getPixelRatio();

  downloadPngBtn.disabled = true;

  try {
    renderer.setPixelRatio(1);
    renderer.setSize(targetWidth, targetHeight, false);
    renderer.setClearColor(0xffffff);

    const layout = computeGridLayout(targetWidth, targetHeight, 0);

    const savedTargetStage = state.targetStage;
    const savedAnimatedStage = state.animatedStage;

    for (let i = 0; i < layout.cells.length; i += 1) {
      const cell = layout.cells[i];
      const x = Math.round(cell.x);
      const y = Math.round(targetHeight - (cell.y + cell.height));
      const drawWidth = Math.max(1, cell.width);
      const drawHeight = Math.max(1, cell.height);

      renderer.setViewport(x, y, drawWidth, drawHeight);
      renderer.setScissor(x, y, drawWidth, drawHeight);
      renderer.setScissorTest(true);

      const cellAspect = drawWidth / Math.max(1, drawHeight);
      const tempCamera = createRenderCameraForAspect(cellAspect);

      state.targetStage = i + 1;
      state.animatedStage = i + 1;
      updateScene();
      renderer.render(scene, tempCamera);
    }

    state.targetStage = savedTargetStage;
    state.animatedStage = savedAnimatedStage;
    updateScene();
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, targetWidth, targetHeight);

    // Composite borders onto an offscreen 2D canvas
    const offscreen = document.createElement("canvas");
    offscreen.width = targetWidth;
    offscreen.height = targetHeight;
    const ctx = offscreen.getContext("2d");
    ctx.drawImage(renderer.domElement, 0, 0);

    if (state.gridBorderShow && state.stageCount > 0) {
      drawGridBorders(
        ctx,
        layout,
        state.gridBorderThickness * scale,
        `#${state.gridBorderColor.getHexString()}`
      );
    }

    if ((state.gridNumberShow || state.gridLabelShow) && state.stageCount > 0) {
      drawGridTextAnnotations(ctx, layout, scale);
    }

    const dataUrl = offscreen.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `creative-process-grid-${timestampForFilename()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } finally {
    renderer.setPixelRatio(previousPixelRatio);
    renderer.setSize(previousSize.x, previousSize.y, false);
    updateScene();
    controls.update();
    renderer.render(scene, camera);
    downloadPngBtn.disabled = false;
  }
}

function bindControls() {
  const setConfigPanelOpen = (isOpen) => {
    configPanel.classList.toggle("is-open", isOpen);
    configPanel.setAttribute("aria-hidden", isOpen ? "false" : "true");
    settingsBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  settingsBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = configPanel.classList.contains("is-open");
    setConfigPanelOpen(!isOpen);
  });

  closeConfigBtn.addEventListener("click", () => {
    setConfigPanelOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (!configPanel.classList.contains("is-open")) {
      return;
    }
    if (configPanel.contains(event.target) || settingsBtn.contains(event.target)) {
      return;
    }
    setConfigPanelOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setConfigPanelOpen(false);
    }
  });

  downloadPngBtn.addEventListener("click", () => {
    if (state.displayMode === "grid") {
      downloadGridPng(3);
    } else {
      downloadHiResPng(3);
    }
  });

  coneRange.addEventListener("input", () => {
    state.coneDegrees = Number(coneRange.value);
    coneValue.textContent = `${state.coneDegrees}°`;
  });

  coneRatioInput.addEventListener("input", () => {
    state.coneRatio = Number(coneRatioInput.value);
    coneRatioValue.textContent = state.coneRatio.toFixed(2);
  });

  coneExtensionInput.addEventListener("input", () => {
    state.coneExtension = Number(coneExtensionInput.value);
    coneExtensionValue.textContent = state.coneExtension.toFixed(2);
  });

  const applySeed = () => {
    const parsed = Number(seedInput.value);
    state.seedValue = Number.isFinite(parsed) ? Math.trunc(parsed) : 42;
    seedInput.value = String(state.seedValue);
    stageOffsets = generateStageOffsets(state.seedValue, state.stageCount);
  };

  const syncSeedControls = () => {
    generateSeedBtn.disabled = state.autoApplySeed;
  };

  seedInput.addEventListener("input", () => {
    if (state.autoApplySeed) {
      applySeed();
    }
  });

  seedInput.addEventListener("change", () => {
    if (state.autoApplySeed) {
      applySeed();
    }
  });

  generateSeedBtn.addEventListener("click", () => {
    applySeed();
  });

  autoApplySeedInput.addEventListener("change", () => {
    state.autoApplySeed = autoApplySeedInput.checked;
    syncSeedControls();
    if (state.autoApplySeed) {
      applySeed();
    }
  });

  syncSeedControls();

  addStageBtn.addEventListener("click", () => {
    if (state.stageCount >= state.stageMax) {
      return;
    }
    state.stageCount += 1;
    ensureStageNames();
    ensureStageColors();
    rebuildStageGeometry();
  });

  showConesToggle.addEventListener("change", () => {
    state.showConeHistory = showConesToggle.checked;
  });

  showSpheresToggle.addEventListener("change", () => {
    state.showSpheres = showSpheresToggle.checked;
  });

  showConnectorsToggle.addEventListener("change", () => {
    state.showConnectors = showConnectorsToggle.checked;
  });

  sphereOpacityInput.addEventListener("input", () => {
    state.sphereOpacity = Number(sphereOpacityInput.value);
    sphereOpacityValue.textContent = state.sphereOpacity.toFixed(2);
  });

  shaderModeInput.addEventListener("change", () => {
    state.shaderMode = shaderModeInput.value;
    applySphereShaderMode();
  });

  coneShaderModeInput.addEventListener("change", () => {
    state.coneShaderMode = coneShaderModeInput.value;
    applyConeMaterial();
  });

  coneOriginModeInput.addEventListener("change", () => {
    state.coneOriginMode = coneOriginModeInput.value;
  });

  angleLimiterInput.addEventListener("change", () => {
    state.angleLimiter = angleLimiterInput.checked;
  });

  coneColorInput.addEventListener("input", () => {
    state.coneColor = new THREE.Color(coneColorInput.value);
  });

  coneActiveOpacityInput.addEventListener("input", () => {
    state.coneActiveOpacity = Number(coneActiveOpacityInput.value);
    coneActiveOpacityValue.textContent = state.coneActiveOpacity.toFixed(2);
  });

  coneInactiveOpacityInput.addEventListener("input", () => {
    state.coneInactiveOpacity = Number(coneInactiveOpacityInput.value);
    coneInactiveOpacityValue.textContent = state.coneInactiveOpacity.toFixed(2);
  });

  showToonOutlineInput.addEventListener("change", () => {
    state.showToonOutline = showToonOutlineInput.checked;
  });

  toonOutlineXrayInput.addEventListener("change", () => {
    state.toonOutlineXray = toonOutlineXrayInput.checked;
  });

  toonOutlineDashedInput.addEventListener("change", () => {
    state.toonOutlineDashed = toonOutlineDashedInput.checked;
  });

  toonOutlineColorInput.addEventListener("input", () => {
    state.toonOutlineColor = new THREE.Color(toonOutlineColorInput.value);
  });

  toonOutlineThicknessInput.addEventListener("input", () => {
    state.toonOutlineThickness = Number(toonOutlineThicknessInput.value);
    toonOutlineThicknessValue.textContent = state.toonOutlineThickness.toFixed(3);
  });

  toonOutlineDashLengthInput.addEventListener("input", () => {
    state.toonOutlineDashLength = Number(toonOutlineDashLengthInput.value);
    toonOutlineDashLengthValue.textContent = state.toonOutlineDashLength.toFixed(2);
  });

  toonOutlineDashGapInput.addEventListener("input", () => {
    state.toonOutlineDashGap = Number(toonOutlineDashGapInput.value);
    toonOutlineDashGapValue.textContent = state.toonOutlineDashGap.toFixed(2);
  });

  toonOutlineDashRepeatInput.addEventListener("input", () => {
    state.toonOutlineDashRepeat = Number(toonOutlineDashRepeatInput.value);
    toonOutlineDashRepeatValue.textContent = String(Math.round(state.toonOutlineDashRepeat));
  });

  intersectionColorInput.addEventListener("input", () => {
    state.intersectionColor = new THREE.Color(intersectionColorInput.value);
  });

  intersectionWidthInput.addEventListener("input", () => {
    state.intersectionWidth = Number(intersectionWidthInput.value);
    intersectionWidthValue.textContent = state.intersectionWidth.toFixed(3);
  });

  initialIntersectionColorInput.addEventListener("input", () => {
    state.initialIntersectionColor = new THREE.Color(initialIntersectionColorInput.value);
  });

  initialIntersectionWidthInput.addEventListener("input", () => {
    state.initialIntersectionWidth = Number(initialIntersectionWidthInput.value);
    initialIntersectionWidthValue.textContent = state.initialIntersectionWidth.toFixed(3);
  });

  arrowColorInput.addEventListener("input", () => {
    state.arrowColor = new THREE.Color(arrowColorInput.value);
  });

  arrowThicknessInput.addEventListener("input", () => {
    state.arrowThickness = Number(arrowThicknessInput.value);
    arrowThicknessValue.textContent = state.arrowThickness.toFixed(3);
  });

  showArrowInput.addEventListener("change", () => {
    state.showArrow = showArrowInput.checked;
  });

  initialArrowColorInput.addEventListener("input", () => {
    state.initialArrowColor = new THREE.Color(initialArrowColorInput.value);
  });

  initialArrowThicknessInput.addEventListener("input", () => {
    state.initialArrowThickness = Number(initialArrowThicknessInput.value);
    initialArrowThicknessValue.textContent = state.initialArrowThickness.toFixed(3);
  });

  showInitialArrowInput.addEventListener("change", () => {
    state.showInitialArrow = showInitialArrowInput.checked;
  });

  dirAzimuthInput.addEventListener("input", () => {
    state.dirAzimuth = Number(dirAzimuthInput.value);
    dirAzimuthValue.textContent = state.dirAzimuth.toFixed(1) + "°";
    updateBaseDirection();
  });

  dirElevationInput.addEventListener("input", () => {
    state.dirElevation = Number(dirElevationInput.value);
    dirElevationValue.textContent = state.dirElevation.toFixed(1) + "°";
    updateBaseDirection();
  });

  showIntersectionInput.addEventListener("change", () => {
    state.showIntersection = showIntersectionInput.checked;
  });

  showInitialIntersectionInput.addEventListener("change", () => {
    state.showInitialIntersection = showInitialIntersectionInput.checked;
  });

  arrowExtensionInput.addEventListener("input", () => {
    state.arrowExtension = Number(arrowExtensionInput.value);
    arrowExtensionValue.textContent = state.arrowExtension.toFixed(2);
  });

  arrowHeadLengthInput.addEventListener("input", () => {
    state.arrowHeadLength = Number(arrowHeadLengthInput.value);
    arrowHeadLengthValue.textContent = state.arrowHeadLength.toFixed(2);
    arrowHead.geometry.dispose();
    arrowHead.geometry = new THREE.ConeGeometry(state.arrowHeadWidth, state.arrowHeadLength, 16, 1);
  });

  arrowHeadWidthInput.addEventListener("input", () => {
    state.arrowHeadWidth = Number(arrowHeadWidthInput.value);
    arrowHeadWidthValue.textContent = state.arrowHeadWidth.toFixed(2);
    arrowHead.geometry.dispose();
    arrowHead.geometry = new THREE.ConeGeometry(state.arrowHeadWidth, state.arrowHeadLength, 16, 1);
  });

  arrowOpacityInput.addEventListener("input", () => {
    state.arrowOpacity = Number(arrowOpacityInput.value);
    arrowOpacityValue.textContent = state.arrowOpacity.toFixed(2);
    updateScene();
  });

  initialArrowExtensionInput.addEventListener("input", () => {
    state.initialArrowExtension = Number(initialArrowExtensionInput.value);
    initialArrowExtensionValue.textContent = state.initialArrowExtension.toFixed(2);
  });

  initialArrowHeadLengthInput.addEventListener("input", () => {
    state.initialArrowHeadLength = Number(initialArrowHeadLengthInput.value);
    initialArrowHeadLengthValue.textContent = state.initialArrowHeadLength.toFixed(2);
    initialArrowHead.geometry.dispose();
    initialArrowHead.geometry = new THREE.ConeGeometry(state.initialArrowHeadWidth, state.initialArrowHeadLength, 16, 1);
  });

  initialArrowHeadWidthInput.addEventListener("input", () => {
    state.initialArrowHeadWidth = Number(initialArrowHeadWidthInput.value);
    initialArrowHeadWidthValue.textContent = state.initialArrowHeadWidth.toFixed(2);
    initialArrowHead.geometry.dispose();
    initialArrowHead.geometry = new THREE.ConeGeometry(state.initialArrowHeadWidth, state.initialArrowHeadLength, 16, 1);
  });

  initialArrowOpacityInput.addEventListener("input", () => {
    state.initialArrowOpacity = Number(initialArrowOpacityInput.value);
    initialArrowOpacityValue.textContent = state.initialArrowOpacity.toFixed(2);
  });

  connectorOpacityInput.addEventListener("input", () => {
    state.connectorOpacity = Number(connectorOpacityInput.value);
    connectorOpacityValue.textContent = state.connectorOpacity.toFixed(2);
  });

  connectorColorInput.addEventListener("input", () => {
    state.connectorColor = new THREE.Color(connectorColorInput.value);
  });

  connectorThicknessInput.addEventListener("input", () => {
    state.connectorThickness = Number(connectorThicknessInput.value);
    connectorThicknessValue.textContent = state.connectorThickness.toFixed(3);
  });

  originDotColorInput.addEventListener("input", () => {
    state.originDotColor = new THREE.Color(originDotColorInput.value);
  });

  originDotSizeInput.addEventListener("input", () => {
    state.originDotSize = Number(originDotSizeInput.value);
    originDotSizeValue.textContent = state.originDotSize.toFixed(3);
    updateDotGeometry(originDot, state.originDotSize);
    updateDotGeometry(originDotOutline, state.originDotSize);
  });

  hitDotColorInput.addEventListener("input", () => {
    state.hitDotColor = new THREE.Color(hitDotColorInput.value);
  });

  hitDotSizeInput.addEventListener("input", () => {
    state.hitDotSize = Number(hitDotSizeInput.value);
    hitDotSizeValue.textContent = state.hitDotSize.toFixed(3);
    hitDots.forEach((dot) => updateDotGeometry(dot, state.hitDotSize));
    hitDotOutlines.forEach((outline) => updateDotGeometry(outline, state.hitDotSize));
  });

  showDotOutlineInput.addEventListener("change", () => {
    state.showDotOutline = showDotOutlineInput.checked;
  });

  dotOutlineColorInput.addEventListener("input", () => {
    state.dotOutlineColor = new THREE.Color(dotOutlineColorInput.value);
  });

  dotOutlineThicknessInput.addEventListener("input", () => {
    state.dotOutlineThickness = Number(dotOutlineThicknessInput.value);
    dotOutlineThicknessValue.textContent = state.dotOutlineThickness.toFixed(3);
  });

  showAxesToggle.addEventListener("change", () => {
    state.showAxes = showAxesToggle.checked;
    updateAxesVisibility();
  });

  showFogToggle.addEventListener("change", () => {
    state.showFog = showFogToggle.checked;
    scene.fog = state.showFog ? new THREE.FogExp2(0xd4e3f6, state.fogDensity) : null;
  });

  fogDensityInput.addEventListener("input", () => {
    state.fogDensity = Number(fogDensityInput.value);
    fogDensityValue.textContent = state.fogDensity.toFixed(3);
    if (state.showFog) {
      scene.fog = new THREE.FogExp2(0xd4e3f6, state.fogDensity);
    }
  });

  axisColorInput.addEventListener("input", () => {
    state.axisColor = new THREE.Color(axisColorInput.value);
    rebuildAxisMeshes();
    updateAxesVisibility();
  });

  axisLengthInput.addEventListener("input", () => {
    state.axisLength = Number(axisLengthInput.value);
    axisLengthValue.textContent = state.axisLength.toFixed(2);
    rebuildAxisMeshes();
    updateAxesVisibility();
  });

  axisThicknessInput.addEventListener("input", () => {
    state.axisThickness = Number(axisThicknessInput.value);
    axisThicknessValue.textContent = state.axisThickness.toFixed(3);
    rebuildAxisMeshes();
    updateAxesVisibility();
  });

  exportConfigBtn.addEventListener("click", () => {
    configExportArea.value = JSON.stringify(buildConfigSnapshot(), null, 2);
  });

  copyConfigBtn.addEventListener("click", async () => {
    if (!configExportArea.value.trim()) {
      configExportArea.value = JSON.stringify(buildConfigSnapshot(), null, 2);
    }
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(configExportArea.value);
      } else {
        throw new Error("Clipboard API unavailable");
      }
      copyConfigBtn.textContent = "Copied";
      setTimeout(() => {
        copyConfigBtn.textContent = "Copy JSON";
      }, 900);
    } catch {
      // Fallback for non-secure contexts or blocked clipboard permissions.
      configExportArea.focus();
      configExportArea.select();
      let copied = false;
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
      copyConfigBtn.textContent = copied ? "Copied" : "Copy Failed";
      setTimeout(() => {
        copyConfigBtn.textContent = "Copy JSON";
      }, 900);
    }
  });

  displayModeInput.addEventListener("change", () => {
    state.displayMode = displayModeInput.value;
    sceneWrap.classList.toggle("grid-mode", state.displayMode === "grid");
    updateSceneWrapHeightForGridMode();
    controls.enabled = true;
    if (state.displayMode !== "grid") {
      gridBorderCtx.clearRect(0, 0, gridBorderOverlay.width, gridBorderOverlay.height);
    }
  });

  gridAspectRatioInput.addEventListener("change", () => {
    state.gridAspectRatio = gridAspectRatioInput.value;
    updateSceneWrapHeightForGridMode();
  });

  gridBorderToggle.addEventListener("change", () => {
    state.gridBorderShow = gridBorderToggle.checked;
  });

  gridBorderColorInput.addEventListener("input", () => {
    state.gridBorderColor.set(gridBorderColorInput.value);
  });

  gridBorderThicknessInput.addEventListener("input", () => {
    state.gridBorderThickness = Number(gridBorderThicknessInput.value);
    gridBorderThicknessValue.textContent = state.gridBorderThickness.toFixed(1);
  });

  gridOuterMarginInput.addEventListener("input", () => {
    state.gridOuterMargin = Number(gridOuterMarginInput.value);
    gridOuterMarginValue.textContent = String(Math.round(state.gridOuterMargin));
    updateSceneWrapHeightForGridMode();
  });

  gridCellGapInput.addEventListener("input", () => {
    state.gridCellGap = Number(gridCellGapInput.value);
    gridCellGapValue.textContent = String(Math.round(state.gridCellGap));
    updateSceneWrapHeightForGridMode();
  });

  gridNumberShowInput.addEventListener("change", () => {
    state.gridNumberShow = gridNumberShowInput.checked;
  });

  gridNumberFontInput.addEventListener("change", () => {
    state.gridNumberFont = gridNumberFontInput.value;
  });

  gridNumberColorInput.addEventListener("input", () => {
    state.gridNumberColor.set(gridNumberColorInput.value);
  });

  gridNumberSizeInput.addEventListener("input", () => {
    state.gridNumberSize = Number(gridNumberSizeInput.value);
    gridNumberSizeValue.textContent = String(Math.round(state.gridNumberSize));
  });

  gridNumberMarginInput.addEventListener("input", () => {
    state.gridNumberMargin = Number(gridNumberMarginInput.value);
    gridNumberMarginValue.textContent = String(Math.round(state.gridNumberMargin));
  });

  gridNumberPlacementInput.addEventListener("change", () => {
    state.gridNumberPlacement = gridNumberPlacementInput.value;
  });

  gridLabelShowInput.addEventListener("change", () => {
    state.gridLabelShow = gridLabelShowInput.checked;
  });

  gridLabelFontInput.addEventListener("change", () => {
    state.gridLabelFont = gridLabelFontInput.value;
  });

  gridLabelColorInput.addEventListener("input", () => {
    state.gridLabelColor.set(gridLabelColorInput.value);
  });

  gridLabelSizeInput.addEventListener("input", () => {
    state.gridLabelSize = Number(gridLabelSizeInput.value);
    gridLabelSizeValue.textContent = String(Math.round(state.gridLabelSize));
  });

  gridLabelMarginInput.addEventListener("input", () => {
    state.gridLabelMargin = Number(gridLabelMarginInput.value);
    gridLabelMarginValue.textContent = String(Math.round(state.gridLabelMargin));
  });

  gridLabelPlacementInput.addEventListener("change", () => {
    state.gridLabelPlacement = gridLabelPlacementInput.value;
  });

  cameraTypeInput.addEventListener("change", () => {
    state.cameraType = cameraTypeInput.value;
    updateCameraType();
  });

  cameraFovInput.addEventListener("input", () => {
    state.cameraFov = Number(cameraFovInput.value);
    cameraFovValue.textContent = state.cameraFov.toFixed(0);
    if (state.cameraType === "perspective") {
      camera.fov = state.cameraFov;
      camera.updateProjectionMatrix();
    }
  });

  cameraZoomInput.addEventListener("input", () => {
    state.cameraZoom = Number(cameraZoomInput.value);
    cameraZoomValue.textContent = state.cameraZoom.toFixed(2);
  });

  resetCameraBtn.addEventListener("click", () => {
    resetCameraTo3_4View();
  });
}

function syncControlsFromState() {
  displayModeInput.value = state.displayMode;
  gridAspectRatioInput.value = state.gridAspectRatio;
  gridBorderToggle.checked = state.gridBorderShow;
  gridBorderColorInput.value = `#${state.gridBorderColor.getHexString()}`;
  gridBorderThicknessInput.value = String(state.gridBorderThickness);
  gridOuterMarginInput.value = String(state.gridOuterMargin);
  gridOuterMarginValue.textContent = String(Math.round(state.gridOuterMargin));
  gridCellGapInput.value = String(state.gridCellGap);
  gridCellGapValue.textContent = String(Math.round(state.gridCellGap));
  gridNumberShowInput.checked = state.gridNumberShow;
  gridNumberFontInput.value = state.gridNumberFont;
  gridNumberColorInput.value = `#${state.gridNumberColor.getHexString()}`;
  gridNumberSizeInput.value = String(state.gridNumberSize);
  gridNumberSizeValue.textContent = String(Math.round(state.gridNumberSize));
  gridNumberMarginInput.value = String(state.gridNumberMargin);
  gridNumberMarginValue.textContent = String(Math.round(state.gridNumberMargin));
  gridNumberPlacementInput.value = state.gridNumberPlacement;
  gridLabelShowInput.checked = state.gridLabelShow;
  gridLabelFontInput.value = state.gridLabelFont;
  gridLabelColorInput.value = `#${state.gridLabelColor.getHexString()}`;
  gridLabelSizeInput.value = String(state.gridLabelSize);
  gridLabelSizeValue.textContent = String(Math.round(state.gridLabelSize));
  gridLabelMarginInput.value = String(state.gridLabelMargin);
  gridLabelMarginValue.textContent = String(Math.round(state.gridLabelMargin));
  gridLabelPlacementInput.value = state.gridLabelPlacement;
  cameraTypeInput.value = state.cameraType;
  cameraFovInput.value = String(state.cameraFov);
  cameraZoomInput.value = String(state.cameraZoom);

  coneRange.value = String(state.coneDegrees);
  coneRatioInput.value = String(state.coneRatio);
  coneExtensionInput.value = String(state.coneExtension);
  seedInput.value = String(state.seedValue);
  autoApplySeedInput.checked = state.autoApplySeed;

  showConesToggle.checked = state.showConeHistory;
  showSpheresToggle.checked = state.showSpheres;
  showConnectorsToggle.checked = state.showConnectors;

  shaderModeInput.value = state.shaderMode;
  sphereOpacityInput.value = String(state.sphereOpacity);
  showToonOutlineInput.checked = state.showToonOutline;
  toonOutlineXrayInput.checked = state.toonOutlineXray;
  toonOutlineDashedInput.checked = state.toonOutlineDashed;
  toonOutlineColorInput.value = `#${state.toonOutlineColor.getHexString()}`;
  toonOutlineThicknessInput.value = String(state.toonOutlineThickness);
  toonOutlineDashLengthInput.value = String(state.toonOutlineDashLength);
  toonOutlineDashLengthValue.textContent = state.toonOutlineDashLength.toFixed(2);
  toonOutlineDashGapInput.value = String(state.toonOutlineDashGap);
  toonOutlineDashGapValue.textContent = state.toonOutlineDashGap.toFixed(2);
  toonOutlineDashRepeatInput.value = String(state.toonOutlineDashRepeat);
  toonOutlineDashRepeatValue.textContent = String(Math.round(state.toonOutlineDashRepeat));

  coneShaderModeInput.value = state.coneShaderMode;
  coneColorInput.value = `#${state.coneColor.getHexString()}`;
  coneOriginModeInput.value = state.coneOriginMode;
  angleLimiterInput.checked = state.angleLimiter;
  coneActiveOpacityInput.value = String(state.coneActiveOpacity);
  coneInactiveOpacityInput.value = String(state.coneInactiveOpacity);

  showIntersectionInput.checked = state.showIntersection;
  intersectionColorInput.value = `#${state.intersectionColor.getHexString()}`;
  intersectionWidthInput.value = String(state.intersectionWidth);

  showInitialIntersectionInput.checked = state.showInitialIntersection;
  initialIntersectionColorInput.value = `#${state.initialIntersectionColor.getHexString()}`;
  initialIntersectionWidthInput.value = String(state.initialIntersectionWidth);

  showArrowInput.checked = state.showArrow;
  arrowColorInput.value = `#${state.arrowColor.getHexString()}`;
  arrowThicknessInput.value = String(state.arrowThickness);
  arrowExtensionInput.value = String(state.arrowExtension);
  arrowHeadLengthInput.value = String(state.arrowHeadLength);
  arrowHeadWidthInput.value = String(state.arrowHeadWidth);
  arrowOpacityInput.value = String(state.arrowOpacity);

  showInitialArrowInput.checked = state.showInitialArrow;
  initialArrowColorInput.value = `#${state.initialArrowColor.getHexString()}`;
  initialArrowThicknessInput.value = String(state.initialArrowThickness);
  initialArrowExtensionInput.value = String(state.initialArrowExtension);
  initialArrowHeadLengthInput.value = String(state.initialArrowHeadLength);
  initialArrowHeadWidthInput.value = String(state.initialArrowHeadWidth);
  initialArrowOpacityInput.value = String(state.initialArrowOpacity);

  connectorColorInput.value = `#${state.connectorColor.getHexString()}`;
  connectorThicknessInput.value = String(state.connectorThickness);
  connectorOpacityInput.value = String(state.connectorOpacity);

  originDotColorInput.value = `#${state.originDotColor.getHexString()}`;
  originDotSizeInput.value = String(state.originDotSize);
  hitDotColorInput.value = `#${state.hitDotColor.getHexString()}`;
  hitDotSizeInput.value = String(state.hitDotSize);
  showDotOutlineInput.checked = state.showDotOutline;
  dotOutlineColorInput.value = `#${state.dotOutlineColor.getHexString()}`;
  dotOutlineThicknessInput.value = String(state.dotOutlineThickness);

  showAxesToggle.checked = state.showAxes;
  axisColorInput.value = `#${state.axisColor.getHexString()}`;
  axisLengthInput.value = String(state.axisLength);
  axisThicknessInput.value = String(state.axisThickness);

  dirAzimuthInput.value = String(state.dirAzimuth);
  dirElevationInput.value = String(state.dirElevation);

  showFogToggle.checked = state.showFog;
  fogDensityInput.value = String(state.fogDensity);
}

function setInitialOutputValues() {
  coneValue.textContent = `${state.coneDegrees}°`;
  coneRatioValue.textContent = state.coneRatio.toFixed(2);
  coneExtensionValue.textContent = state.coneExtension.toFixed(2);
  sphereOpacityValue.textContent = state.sphereOpacity.toFixed(2);
  toonOutlineThicknessValue.textContent = state.toonOutlineThickness.toFixed(3);
  toonOutlineDashLengthValue.textContent = state.toonOutlineDashLength.toFixed(2);
  toonOutlineDashGapValue.textContent = state.toonOutlineDashGap.toFixed(2);
  toonOutlineDashRepeatValue.textContent = String(Math.round(state.toonOutlineDashRepeat));
  coneActiveOpacityValue.textContent = state.coneActiveOpacity.toFixed(2);
  coneInactiveOpacityValue.textContent = state.coneInactiveOpacity.toFixed(2);
  intersectionWidthValue.textContent = state.intersectionWidth.toFixed(3);
  initialIntersectionWidthValue.textContent = state.initialIntersectionWidth.toFixed(3);
  arrowThicknessValue.textContent = state.arrowThickness.toFixed(3);
  arrowExtensionValue.textContent = state.arrowExtension.toFixed(2);
  arrowHeadLengthValue.textContent = state.arrowHeadLength.toFixed(2);
  arrowHeadWidthValue.textContent = state.arrowHeadWidth.toFixed(2);
  arrowOpacityValue.textContent = state.arrowOpacity.toFixed(2);
  initialArrowThicknessValue.textContent = state.initialArrowThickness.toFixed(3);
  initialArrowExtensionValue.textContent = state.initialArrowExtension.toFixed(2);
  initialArrowHeadLengthValue.textContent = state.initialArrowHeadLength.toFixed(2);
  initialArrowHeadWidthValue.textContent = state.initialArrowHeadWidth.toFixed(2);
  initialArrowOpacityValue.textContent = state.initialArrowOpacity.toFixed(2);
  connectorOpacityValue.textContent = state.connectorOpacity.toFixed(2);
  connectorThicknessValue.textContent = state.connectorThickness.toFixed(3);
  originDotSizeValue.textContent = state.originDotSize.toFixed(3);
  hitDotSizeValue.textContent = state.hitDotSize.toFixed(3);
  dotOutlineThicknessValue.textContent = state.dotOutlineThickness.toFixed(3);
  dirAzimuthValue.textContent = state.dirAzimuth.toFixed(1) + "°";
  dirElevationValue.textContent = state.dirElevation.toFixed(1) + "°";
  axisLengthValue.textContent = state.axisLength.toFixed(2);
  axisThicknessValue.textContent = state.axisThickness.toFixed(3);
  fogDensityValue.textContent = state.fogDensity.toFixed(3);
  stageCountValue.textContent = String(state.stageCount);
  displayModeInput.value = state.displayMode;
  gridAspectRatioInput.value = state.gridAspectRatio;
  gridBorderToggle.checked = state.gridBorderShow;
  gridBorderColorInput.value = `#${state.gridBorderColor.getHexString()}`;
  gridBorderThicknessInput.value = String(state.gridBorderThickness);
  gridBorderThicknessValue.textContent = state.gridBorderThickness.toFixed(1);
  gridOuterMarginInput.value = String(state.gridOuterMargin);
  gridOuterMarginValue.textContent = String(Math.round(state.gridOuterMargin));
  gridCellGapInput.value = String(state.gridCellGap);
  gridCellGapValue.textContent = String(Math.round(state.gridCellGap));
  gridNumberShowInput.checked = state.gridNumberShow;
  gridNumberFontInput.value = state.gridNumberFont;
  gridNumberColorInput.value = `#${state.gridNumberColor.getHexString()}`;
  gridNumberSizeInput.value = String(state.gridNumberSize);
  gridNumberSizeValue.textContent = String(Math.round(state.gridNumberSize));
  gridNumberMarginInput.value = String(state.gridNumberMargin);
  gridNumberMarginValue.textContent = String(Math.round(state.gridNumberMargin));
  gridNumberPlacementInput.value = state.gridNumberPlacement;
  gridLabelShowInput.checked = state.gridLabelShow;
  gridLabelFontInput.value = state.gridLabelFont;
  gridLabelColorInput.value = `#${state.gridLabelColor.getHexString()}`;
  gridLabelSizeInput.value = String(state.gridLabelSize);
  gridLabelSizeValue.textContent = String(Math.round(state.gridLabelSize));
  gridLabelMarginInput.value = String(state.gridLabelMargin);
  gridLabelMarginValue.textContent = String(Math.round(state.gridLabelMargin));
  gridLabelPlacementInput.value = state.gridLabelPlacement;
  showToonOutlineInput.checked = state.showToonOutline;
  toonOutlineXrayInput.checked = state.toonOutlineXray;
  toonOutlineDashedInput.checked = state.toonOutlineDashed;
  toonOutlineDashLengthInput.value = String(state.toonOutlineDashLength);
  toonOutlineDashGapInput.value = String(state.toonOutlineDashGap);
  toonOutlineDashRepeatInput.value = String(state.toonOutlineDashRepeat);
  cameraTypeInput.value = state.cameraType;
  cameraFovInput.value = String(state.cameraFov);
  cameraFovValue.textContent = state.cameraFov.toFixed(0);
  cameraZoomInput.value = String(state.cameraZoom);
  cameraZoomValue.textContent = state.cameraZoom.toFixed(2);
}

window.addEventListener("resize", onResize);

if (typeof ResizeObserver !== "undefined") {
  const sceneResizeObserver = new ResizeObserver(() => {
    onResize();
  });
  sceneResizeObserver.observe(sceneWrap);
}

ensureStageNames();
ensureStageColors();
syncControlsFromState();
updateBaseDirection();
const loadedCameraPosition = readCameraPosition(cfg.camera?.position);
if (loadedCameraPosition) {
  perspectiveCamera.position.copy(loadedCameraPosition);
  orthographicCamera.position.copy(loadedCameraPosition);
}
updateCameraType();
controls.update();
rebuildStageGeometry();
rebuildAxisMeshes();
updateAxesVisibility();
bindControls();
setInitialOutputValues();
scene.fog = state.showFog ? new THREE.FogExp2(0xd4e3f6, state.fogDensity) : null;
onResize();
animate();
