import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("#scene");
const stageBar = document.querySelector(".stage-list");
const stageColorList = document.querySelector("#stageColorList");
const downloadPngBtn = document.querySelector("#downloadPngBtn");
const settingsBtn = document.querySelector("#settingsBtn");
const configPanel = document.querySelector("#configPanel");
const closeConfigBtn = document.querySelector("#closeConfigBtn");
const configPanelSubtitle = document.querySelector("#configPanelSubtitle");

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

const showDotLabelsInput = document.querySelector("#showDotLabels");
const showOriginLabelInput = document.querySelector("#showOriginLabel");
const originLabelTextInput = document.querySelector("#originLabelText");
const showVectorEndLabelInput = document.querySelector("#showVectorEndLabel");
const vectorEndLabelTextModeInput = document.querySelector("#vectorEndLabelTextMode");
const vectorEndLabelTextInput = document.querySelector("#vectorEndLabelText");
const showInitialVectorEndLabelInput = document.querySelector("#showInitialVectorEndLabel");
const initialVectorEndLabelTextInput = document.querySelector("#initialVectorEndLabelText");
const labelFontInput = document.querySelector("#labelFont");
const labelSizeInput = document.querySelector("#labelSize");
const labelSizeValue = document.querySelector("#labelSizeValue");
const labelColorInput = document.querySelector("#labelColor");
const labelTextTransformInput = document.querySelector("#labelTextTransform");
const labelBoldInput = document.querySelector("#labelBold");
const labelItalicInput = document.querySelector("#labelItalic");
const labelUnderlineInput = document.querySelector("#labelUnderline");
const labelPlacementInput = document.querySelector("#labelPlacement");
const labelMarginInput = document.querySelector("#labelMargin");
const labelMarginValue = document.querySelector("#labelMarginValue");
const labelPointerOffsetInput = document.querySelector("#labelPointerOffset");
const labelPointerOffsetValue = document.querySelector("#labelPointerOffsetValue");
const labelOffsetInput = document.querySelector("#labelOffset");
const labelOffsetValue = document.querySelector("#labelOffsetValue");
const labelPaddingXInput = document.querySelector("#labelPaddingX");
const labelPaddingXValue = document.querySelector("#labelPaddingXValue");
const labelPaddingYInput = document.querySelector("#labelPaddingY");
const labelPaddingYValue = document.querySelector("#labelPaddingYValue");
const labelBoxColorInput = document.querySelector("#labelBoxColor");
const labelBoxOpacityInput = document.querySelector("#labelBoxOpacity");
const labelBoxOpacityValue = document.querySelector("#labelBoxOpacityValue");
const labelBorderColorInput = document.querySelector("#labelBorderColor");
const labelBorderWidthInput = document.querySelector("#labelBorderWidth");
const labelBorderWidthValue = document.querySelector("#labelBorderWidthValue");
const labelBorderRadiusInput = document.querySelector("#labelBorderRadius");
const labelBorderRadiusValue = document.querySelector("#labelBorderRadiusValue");
const labelPointerShowInput = document.querySelector("#labelPointerShow");
const labelPointerSizeInput = document.querySelector("#labelPointerSize");
const labelPointerSizeValue = document.querySelector("#labelPointerSizeValue");

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
const gridNumberTextTransformInput = document.querySelector("#gridNumberTextTransform");
const gridNumberBoldInput = document.querySelector("#gridNumberBold");
const gridNumberItalicInput = document.querySelector("#gridNumberItalic");
const gridNumberUnderlineInput = document.querySelector("#gridNumberUnderline");
const gridLabelShowInput = document.querySelector("#gridLabelShow");
const gridLabelFontInput = document.querySelector("#gridLabelFont");
const gridLabelColorInput = document.querySelector("#gridLabelColor");
const gridLabelSizeInput = document.querySelector("#gridLabelSize");
const gridLabelSizeValue = document.querySelector("#gridLabelSizeValue");
const gridLabelMarginInput = document.querySelector("#gridLabelMargin");
const gridLabelMarginValue = document.querySelector("#gridLabelMarginValue");
const gridLabelPlacementInput = document.querySelector("#gridLabelPlacement");
const gridLabelTextTransformInput = document.querySelector("#gridLabelTextTransform");
const gridLabelBoldInput = document.querySelector("#gridLabelBold");
const gridLabelItalicInput = document.querySelector("#gridLabelItalic");
const gridLabelUnderlineInput = document.querySelector("#gridLabelUnderline");
const gridSyncCellCamerasInput = document.querySelector("#gridSyncCellCameras");
const gridSyncCellPositionInput = document.querySelector("#gridSyncCellPosition");
const gridSyncCellZoomInput = document.querySelector("#gridSyncCellZoom");
const resetGridCellCameraBtn = document.querySelector("#resetGridCellCameraBtn");
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
const configConditionalGroups = Array.from(configPanel.querySelectorAll("[data-mode], [data-requires]"));

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
  showDotLabels: toBoolean(cfg.labels?.showDotLabels, true),
  showOriginLabel: toBoolean(cfg.labels?.showOriginLabel, true),
  originLabelText: typeof cfg.labels?.originText === "string" ? cfg.labels.originText : "Origin",
  showVectorEndLabel: toBoolean(cfg.labels?.showVectorEndLabel, true),
  vectorEndTextMode: typeof cfg.labels?.vectorEndTextMode === "string" ? cfg.labels.vectorEndTextMode : "stage",
  vectorEndText: typeof cfg.labels?.vectorEndText === "string" ? cfg.labels.vectorEndText : "Vector End",
  showInitialVectorEndLabel: toBoolean(cfg.labels?.showInitialVectorEndLabel, false),
  initialVectorEndText: typeof cfg.labels?.initialVectorEndText === "string" ? cfg.labels.initialVectorEndText : "Initial Vector",
  labelFont: typeof cfg.labels?.font === "string" ? cfg.labels.font : "Inter, system-ui, sans-serif",
  labelSize: toNumber(cfg.labels?.size, 14),
  labelColor: toColor(cfg.labels?.color, "#111827"),
  labelTextTransform: typeof cfg.labels?.textTransform === "string" ? cfg.labels.textTransform : "none",
  labelBold: toBoolean(cfg.labels?.bold, false),
  labelItalic: toBoolean(cfg.labels?.italic, false),
  labelUnderline: toBoolean(cfg.labels?.underline, false),
  labelPlacement: typeof cfg.labels?.placement === "string" ? cfg.labels.placement : "above",
  labelMargin: toNumber(cfg.labels?.margin, 10),
  labelPointerOffset: toNumber(cfg.labels?.pointerOffset, 0),
  labelOffset: toNumber(cfg.labels?.labelOffset ?? cfg.labels?.offset, 0),
  labelPaddingX: toNumber(cfg.labels?.paddingX, 8),
  labelPaddingY: toNumber(cfg.labels?.paddingY, 5),
  labelBoxColor: toColor(cfg.labels?.box?.color, "#ffffff"),
  labelBoxOpacity: toNumber(cfg.labels?.box?.opacity, 0.9),
  labelBorderColor: toColor(cfg.labels?.box?.borderColor, "#111827"),
  labelBorderWidth: toNumber(cfg.labels?.box?.borderWidth, 1),
  labelBorderRadius: toNumber(cfg.labels?.box?.borderRadius, 6),
  labelPointerShow: toBoolean(cfg.labels?.pointer?.show, true),
  labelPointerSize: toNumber(cfg.labels?.pointer?.size, 8),
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
  gridNumberTextTransform: typeof cfg.display?.gridNumber?.textTransform === "string" ? cfg.display.gridNumber.textTransform : "none",
  gridNumberBold: toBoolean(cfg.display?.gridNumber?.bold, false),
  gridNumberItalic: toBoolean(cfg.display?.gridNumber?.italic, false),
  gridNumberUnderline: toBoolean(cfg.display?.gridNumber?.underline, false),
  gridLabelShow: toBoolean(cfg.display?.gridLabel?.show, false),
  gridLabelFont: typeof cfg.display?.gridLabel?.font === "string" ? cfg.display.gridLabel.font : "Inter, system-ui, sans-serif",
  gridLabelColor: toColor(cfg.display?.gridLabel?.color, "#111827"),
  gridLabelSize: toNumber(cfg.display?.gridLabel?.size, 16),
  gridLabelMargin: toNumber(cfg.display?.gridLabel?.margin, 6),
  gridLabelPlacement: typeof cfg.display?.gridLabel?.placement === "string" ? cfg.display.gridLabel.placement : "top-middle",
  gridLabelTextTransform: typeof cfg.display?.gridLabel?.textTransform === "string" ? cfg.display.gridLabel.textTransform : "none",
  gridLabelBold: toBoolean(cfg.display?.gridLabel?.bold, false),
  gridLabelItalic: toBoolean(cfg.display?.gridLabel?.italic, false),
  gridLabelUnderline: toBoolean(cfg.display?.gridLabel?.underline, false),
  gridSyncCellCameras: toBoolean(
    cfg.display?.gridSyncCellCameras,
    (typeof cfg.display?.gridCameraMode === "string" ? cfg.display.gridCameraMode : "sync") !== "custom"
  ),
  gridSyncCellPosition: toBoolean(
    cfg.display?.gridSyncCellPosition,
    toBoolean(
      cfg.display?.gridSyncCellCameras,
      (typeof cfg.display?.gridCameraMode === "string" ? cfg.display.gridCameraMode : "sync") !== "custom"
    )
  ),
  gridSyncCellZoom: toBoolean(
    cfg.display?.gridSyncCellZoom,
    (typeof cfg.display?.gridCameraMode === "string" ? cfg.display.gridCameraMode : "sync") !== "custom"
  ),
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
let activeGridCameraCell = 0;
let gridCellViews = [];

function createGridViewFromCurrentCamera() {
  return {
    position: camera.position.clone(),
    target: controls.target.clone(),
    zoom: camera.zoom
  };
}

function parseGridCustomViews(rawViews) {
  if (!Array.isArray(rawViews)) {
    return [];
  }
  return rawViews.map((entry) => {
    const position = readCameraPosition(entry?.position);
    const target = readCameraPosition(entry?.target);
    if (!position || !target) {
      return null;
    }
    const zoom = Number(entry?.zoom);
    return {
      position,
      target,
      zoom: Number.isFinite(zoom) ? zoom : camera.zoom
    };
  });
}

function ensureGridCellViews() {
  while (gridCellViews.length < state.stageCount) {
    gridCellViews.push(createGridViewFromCurrentCamera());
  }
  gridCellViews = gridCellViews.slice(0, state.stageCount).map((view) => {
    if (!view || !view.position || !view.target) {
      return createGridViewFromCurrentCamera();
    }
    return {
      position: view.position.clone(),
      target: view.target.clone(),
      zoom: Number.isFinite(view.zoom) ? view.zoom : camera.zoom
    };
  });
  activeGridCameraCell = THREE.MathUtils.clamp(activeGridCameraCell, 0, Math.max(0, state.stageCount - 1));
}

function shouldUsePerCellCamera() {
  return state.displayMode === "grid" && !state.gridSyncCellCameras;
}

function shouldUsePerCellPosition() {
  return state.displayMode === "grid" && !state.gridSyncCellPosition;
}

function hasPerCellGridCameraState() {
  return shouldUsePerCellCamera() || shouldUsePerCellPosition() || shouldUsePerCellZoom();
}

function getCameraOrbitOffset() {
  return camera.position.clone().sub(controls.target);
}

function getGridViewOrbitOffset(view) {
  if (!view?.position || !view?.target) {
    return getCameraOrbitOffset();
  }
  return view.position.clone().sub(view.target);
}

function shouldUsePerCellZoom() {
  return state.displayMode === "grid" && !state.gridSyncCellZoom;
}

function getGridCellViewOverride(index) {
  const view = gridCellViews[index];
  if (!view) {
    return null;
  }
  const usePerCellOrbit = shouldUsePerCellCamera();
  const usePerCellPosition = shouldUsePerCellPosition();
  const usePerCellZoom = shouldUsePerCellZoom();
  if (!usePerCellOrbit && !usePerCellPosition && !usePerCellZoom) {
    return null;
  }

  const target = usePerCellPosition ? view.target.clone() : controls.target.clone();
  const orbitOffset = usePerCellOrbit ? getGridViewOrbitOffset(view) : getCameraOrbitOffset();

  return {
    position: target.clone().add(orbitOffset),
    target,
    zoom: usePerCellZoom ? view.zoom : undefined
  };
}

function applyGridCellViewToMainCamera(index) {
  const view = gridCellViews[index];
  if (!view) {
    return;
  }
  const currentOffset = getCameraOrbitOffset();
  const nextTarget = shouldUsePerCellPosition() ? view.target.clone() : controls.target.clone();
  const nextOffset = shouldUsePerCellCamera() ? getGridViewOrbitOffset(view) : currentOffset;

  controls.target.copy(nextTarget);
  camera.position.copy(nextTarget.clone().add(nextOffset));

  if (shouldUsePerCellZoom()) {
    camera.zoom = Number.isFinite(view.zoom) ? view.zoom : camera.zoom;
    camera.updateProjectionMatrix();
  }
  controls.update();
}

function saveMainCameraToGridCell(index) {
  if (index < 0 || index >= gridCellViews.length) {
    return;
  }
  const currentTarget = controls.target.clone();
  const currentOffset = getCameraOrbitOffset();
  const next = {
    position: gridCellViews[index]?.position?.clone?.() ?? camera.position.clone(),
    target: gridCellViews[index]?.target?.clone?.() ?? controls.target.clone(),
    zoom: Number.isFinite(gridCellViews[index]?.zoom) ? gridCellViews[index].zoom : camera.zoom
  };
  if (shouldUsePerCellPosition()) {
    next.target = currentTarget;
  }
  if (shouldUsePerCellCamera()) {
    next.position = next.target.clone().add(currentOffset);
  }
  if (shouldUsePerCellZoom()) {
    next.zoom = camera.zoom;
  }
  gridCellViews[index] = next;
}

function resetActiveGridCellCamera() {
  if (gridCellViews.length === 0) {
    ensureGridCellViews();
  }
  gridCellViews[activeGridCameraCell] = createGridViewFromCurrentCamera();
  applyGridCellViewToMainCamera(activeGridCameraCell);
}

function updateGridCameraModeUi() {
  resetGridCellCameraBtn.disabled = !hasPerCellGridCameraState();
}

function controlMatchesRequirement(control, expectedValue) {
  if (!control) {
    return false;
  }
  if (control.type === "checkbox") {
    if (expectedValue === "unchecked") {
      return !control.checked;
    }
    return control.checked;
  }
  if (typeof expectedValue === "string" && expectedValue.length > 0) {
    return control.value === expectedValue;
  }
  return Boolean(control.value);
}

function syncConfigPanelVisibility() {
  if (configPanelSubtitle) {
    configPanelSubtitle.textContent = state.displayMode === "grid"
      ? "Showing grid-specific controls alongside shared scene settings."
      : "Showing single-view controls alongside shared scene settings.";
  }

  for (const group of configConditionalGroups) {
    const mode = group.dataset.mode;
    const selector = group.dataset.requires;
    const expectedValue = group.dataset.requiresValue;
    const modeMatches = !mode || mode === state.displayMode;
    const requirementMatches = !selector || controlMatchesRequirement(document.querySelector(selector), expectedValue);
    group.hidden = !(modeMatches && requirementMatches);
  }
}

function getGridLayoutForCurrentCanvas() {
  const width = Math.max(1, canvas.clientWidth);
  const height = Math.max(1, canvas.clientHeight);
  const wrapRect = sceneWrap.getBoundingClientRect();
  const uiRect = sceneUi.getBoundingClientRect();
  const topInset = Math.max(0, Math.round(uiRect.bottom - wrapRect.top + 8));
  return computeGridLayout(width, height, topInset);
}

function selectGridCameraCellFromPointerEvent(event) {
  if (state.displayMode !== "grid" || !hasPerCellGridCameraState()) {
    return;
  }
  const layout = getGridLayoutForCurrentCanvas();
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const idx = layout.cells.findIndex((cell) =>
    x >= cell.x && x <= cell.x + cell.width && y >= cell.y && y <= cell.y + cell.height
  );
  if (idx >= 0) {
    ensureGridCellViews();
    activeGridCameraCell = idx;
    applyGridCellViewToMainCamera(activeGridCameraCell);
    updateGridCameraModeUi();
  }
}

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
  ensureGridCellViews();
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
    labels: {
      showDotLabels: state.showDotLabels,
      showOriginLabel: state.showOriginLabel,
      originText: state.originLabelText,
      showVectorEndLabel: state.showVectorEndLabel,
      vectorEndTextMode: state.vectorEndTextMode,
      vectorEndText: state.vectorEndText,
      showInitialVectorEndLabel: state.showInitialVectorEndLabel,
      initialVectorEndText: state.initialVectorEndText,
      font: state.labelFont,
      size: state.labelSize,
      color: `#${state.labelColor.getHexString()}`,
      textTransform: state.labelTextTransform,
      bold: state.labelBold,
      italic: state.labelItalic,
      underline: state.labelUnderline,
      placement: state.labelPlacement,
      margin: state.labelMargin,
      pointerOffset: state.labelPointerOffset,
      labelOffset: state.labelOffset,
      paddingX: state.labelPaddingX,
      paddingY: state.labelPaddingY,
      box: {
        color: `#${state.labelBoxColor.getHexString()}`,
        opacity: state.labelBoxOpacity,
        borderColor: `#${state.labelBorderColor.getHexString()}`,
        borderWidth: state.labelBorderWidth,
        borderRadius: state.labelBorderRadius
      },
      pointer: {
        show: state.labelPointerShow,
        size: state.labelPointerSize
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
      gridSyncCellCameras: state.gridSyncCellCameras,
      gridSyncCellPosition: state.gridSyncCellPosition,
      gridSyncCellZoom: state.gridSyncCellZoom,
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
        placement: state.gridNumberPlacement,
        textTransform: state.gridNumberTextTransform,
        bold: state.gridNumberBold,
        italic: state.gridNumberItalic,
        underline: state.gridNumberUnderline
      },
      gridLabel: {
        show: state.gridLabelShow,
        font: state.gridLabelFont,
        color: `#${state.gridLabelColor.getHexString()}`,
        size: state.gridLabelSize,
        margin: state.gridLabelMargin,
        placement: state.gridLabelPlacement,
        textTransform: state.gridLabelTextTransform,
        bold: state.gridLabelBold,
        italic: state.gridLabelItalic,
        underline: state.gridLabelUnderline
      },
      gridCustomCameras: gridCellViews.map((view) => ({
        position: {
          x: view.position.x,
          y: view.position.y,
          z: view.position.z
        },
        target: {
          x: view.target.x,
          y: view.target.y,
          z: view.target.z
        },
        zoom: view.zoom
      }))
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

function createRenderCameraForAspect(aspect, viewOverride = null) {
  const safeAspect = Math.max(0.0001, aspect);
  const sourcePosition = viewOverride?.position ?? camera.position;
  const sourceTarget = viewOverride?.target ?? controls.target;
  const sourceZoom = Number.isFinite(viewOverride?.zoom) ? viewOverride.zoom : camera.zoom;

  if (camera.isOrthographicCamera) {
    const tempCamera = new THREE.OrthographicCamera(
      -safeAspect * state.cameraZoom,
      safeAspect * state.cameraZoom,
      state.cameraZoom,
      -state.cameraZoom,
      camera.near,
      camera.far
    );
    tempCamera.position.copy(sourcePosition);
    tempCamera.lookAt(sourceTarget);
    tempCamera.zoom = sourceZoom;
    tempCamera.updateProjectionMatrix();
    tempCamera.updateMatrixWorld(true);
    return tempCamera;
  }

  const tempCamera = new THREE.PerspectiveCamera(
    camera.fov,
    safeAspect,
    camera.near,
    camera.far
  );
  tempCamera.position.copy(sourcePosition);
  tempCamera.lookAt(sourceTarget);
  tempCamera.zoom = sourceZoom;
  tempCamera.updateProjectionMatrix();
  tempCamera.updateMatrixWorld(true);
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

function buildCanvasFont(size, fontFamily, isBold, isItalic) {
  const parts = [];
  if (isItalic) {
    parts.push("italic");
  }
  if (isBold) {
    parts.push("700");
  }
  parts.push(`${Math.max(1, size)}px`);
  parts.push(fontFamily);
  return parts.join(" ");
}

function applyTextTransformWithMode(text, mode) {
  const value = String(text ?? "");
  if (mode === "uppercase") {
    return value.toUpperCase();
  }
  if (mode === "lowercase") {
    return value.toLowerCase();
  }
  if (mode === "capitalize") {
    return value.replace(/\b\w/g, (m) => m.toUpperCase());
  }
  return value;
}

function drawStyledCanvasText(ctx, text, x, y, options = {}) {
  const {
    maxWidth,
    underline = false,
    fontSize = 12,
    textAlign = ctx.textAlign,
    textBaseline = ctx.textBaseline
  } = options;

  if (Number.isFinite(maxWidth)) {
    ctx.fillText(text, x, y, maxWidth);
  } else {
    ctx.fillText(text, x, y);
  }

  if (!underline) {
    return;
  }

  const measuredWidth = ctx.measureText(text).width;
  const lineWidth = Number.isFinite(maxWidth) ? Math.min(maxWidth, measuredWidth) : measuredWidth;
  let startX = x;

  if (textAlign === "center") {
    startX = x - lineWidth / 2;
  } else if (textAlign === "right" || textAlign === "end") {
    startX = x - lineWidth;
  }

  let underlineY = y;
  if (textBaseline === "top" || textBaseline === "hanging") {
    underlineY = y + fontSize + 1;
  } else if (textBaseline === "middle") {
    underlineY = y + fontSize * 0.42;
  } else {
    underlineY = y + 2;
  }

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(startX, underlineY);
  ctx.lineTo(startX + lineWidth, underlineY);
  ctx.lineWidth = Math.max(1, fontSize * 0.08);
  ctx.strokeStyle = ctx.fillStyle;
  ctx.stroke();
  ctx.restore();
}

function drawGridTextAnnotations(ctx, layout, textScale = 1) {
  if (state.gridNumberShow) {
    ctx.fillStyle = `#${state.gridNumberColor.getHexString()}`;
    const numberFontSize = Math.max(1, state.gridNumberSize * textScale);
    ctx.font = buildCanvasFont(numberFontSize, state.gridNumberFont, state.gridNumberBold, state.gridNumberItalic);
    for (let i = 0; i < layout.cells.length; i += 1) {
      const cell = layout.cells[i];
      const padding = (state.gridNumberMargin + state.gridBorderThickness) * textScale;
      const pos = getPlacementPosition(cell, state.gridNumberPlacement, padding);
      const numberText = applyTextTransformWithMode(String(i + 1), state.gridNumberTextTransform);
      ctx.textAlign = pos.textAlign;
      ctx.textBaseline = pos.textBaseline;
      drawStyledCanvasText(ctx, numberText, pos.x, pos.y, {
        underline: state.gridNumberUnderline,
        fontSize: numberFontSize,
        textAlign: pos.textAlign,
        textBaseline: pos.textBaseline
      });
    }
  }

  if (state.gridLabelShow) {
    ctx.fillStyle = `#${state.gridLabelColor.getHexString()}`;
    const labelFontSize = Math.max(1, state.gridLabelSize * textScale);
    ctx.font = buildCanvasFont(labelFontSize, state.gridLabelFont, state.gridLabelBold, state.gridLabelItalic);
    for (let i = 0; i < layout.cells.length; i += 1) {
      const cell = layout.cells[i];
      const label = applyTextTransformWithMode(state.stageNames[i] || `Stage ${i + 1}`, state.gridLabelTextTransform);
      const padding = (state.gridLabelMargin + state.gridBorderThickness) * textScale;
      const pos = getPlacementPosition(cell, state.gridLabelPlacement, padding);
      ctx.textAlign = pos.textAlign;
      ctx.textBaseline = pos.textBaseline;

      const maxWidth = Math.max(8, cell.width - padding * 2);
      const renderedText = clampTextToCell(ctx, String(label), maxWidth);
      drawStyledCanvasText(ctx, renderedText, pos.x, pos.y, {
        maxWidth,
        underline: state.gridLabelUnderline,
        fontSize: labelFontSize,
        textAlign: pos.textAlign,
        textBaseline: pos.textBaseline
      });
    }
  }
}

function applyTextTransform(text) {
  return applyTextTransformWithMode(text, state.labelTextTransform);
}

function colorToRgbaString(color, alpha = 1) {
  const r = Math.round(THREE.MathUtils.clamp(color.r, 0, 1) * 255);
  const g = Math.round(THREE.MathUtils.clamp(color.g, 0, 1) * 255);
  const b = Math.round(THREE.MathUtils.clamp(color.b, 0, 1) * 255);
  return `rgba(${r}, ${g}, ${b}, ${THREE.MathUtils.clamp(alpha, 0, 1).toFixed(4)})`;
}

function worldToCanvasPosition(worldPoint, cameraToUse, viewport) {
  const projected = worldPoint.clone().project(cameraToUse);
  return {
    x: viewport.x + (projected.x * 0.5 + 0.5) * viewport.width,
    y: viewport.y + (-projected.y * 0.5 + 0.5) * viewport.height,
    onScreen: projected.z >= -1.2 && projected.z <= 1.2
  };
}

function getPointLabelContext(stageValue) {
  const clampedStage = THREE.MathUtils.clamp(stageValue, 1, state.stageCount);
  const targetStage = THREE.MathUtils.clamp(Math.round(clampedStage), 1, state.stageCount);
  const maxVisibleStage = targetStage;
  const dirs = getStageDirections();
  const stagePoints = stageRadii.map((r, i) => new THREE.Vector3().copy(dirs[i]).multiplyScalar(r));
  const savedAnimatedStage = state.animatedStage;
  state.animatedStage = clampedStage;
  const currentPoint = new THREE.Vector3().copy(getLerpedDirection(dirs)).multiplyScalar(getLerpedRadius());
  state.animatedStage = savedAnimatedStage;

  const initialDirection = dirs[0] ?? baseDirection;
  const initialRadius = stageRadii[Math.max(0, maxVisibleStage - 1)] ?? stageRadii[0] ?? 0;
  const initialPoint = initialDirection.clone().multiplyScalar(initialRadius);

  return {
    targetStage,
    maxVisibleStage,
    stagePoints,
    currentPoint,
    initialPoint
  };
}

function getPointLabelEntries(stageValue) {
  const ctx = getPointLabelContext(stageValue);
  const labels = [];

  if (state.showDotLabels) {
    for (let i = 0; i < ctx.maxVisibleStage; i += 1) {
      labels.push({
        text: state.stageNames[i] || `Stage ${i + 1}`,
        point: ctx.stagePoints[i]
      });
    }
  }

  if (state.showOriginLabel) {
    labels.push({
      text: state.originLabelText || "Origin",
      point: new THREE.Vector3(0, 0, 0)
    });
  }

  if (state.showVectorEndLabel) {
    const stageName = state.stageNames[ctx.targetStage - 1] || `Stage ${ctx.targetStage}`;
    labels.push({
      text: state.vectorEndTextMode === "custom" ? (state.vectorEndText || "Vector End") : stageName,
      point: ctx.currentPoint
    });
  }

  if (state.showInitialVectorEndLabel && ctx.targetStage > 1) {
    labels.push({
      text: state.initialVectorEndText || "Initial Vector",
      point: ctx.initialPoint
    });
  }

  return labels;
}

function roundedRectPath(ctx, x, y, width, height, radius) {
  const r = Math.max(0, Math.min(radius, Math.min(width, height) / 2));
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawPointerPath(ctx, placement, anchorX, anchorY, boxX, boxY, boxWidth, boxHeight, pointerSize) {
  if (pointerSize <= 0 || !state.labelPointerShow) {
    return;
  }

  const halfBase = pointerSize * 0.6;
  ctx.beginPath();

  if (placement === "above") {
    const cx = boxX + boxWidth / 2;
    ctx.moveTo(cx - halfBase, boxY + boxHeight);
    ctx.lineTo(cx + halfBase, boxY + boxHeight);
    ctx.lineTo(anchorX, anchorY);
  } else if (placement === "below") {
    const cx = boxX + boxWidth / 2;
    ctx.moveTo(cx - halfBase, boxY);
    ctx.lineTo(cx + halfBase, boxY);
    ctx.lineTo(anchorX, anchorY);
  } else if (placement === "left") {
    const cy = boxY + boxHeight / 2;
    ctx.moveTo(boxX + boxWidth, cy - halfBase);
    ctx.lineTo(boxX + boxWidth, cy + halfBase);
    ctx.lineTo(anchorX, anchorY);
  } else {
    const cy = boxY + boxHeight / 2;
    ctx.moveTo(boxX, cy - halfBase);
    ctx.lineTo(boxX, cy + halfBase);
    ctx.lineTo(anchorX, anchorY);
  }

  ctx.closePath();
}

function drawPointLabels(ctx, cameraToUse, viewport, stageValue, textScale = 1) {
  const entries = getPointLabelEntries(stageValue);
  if (entries.length === 0) {
    return;
  }

  const fontSize = Math.max(1, state.labelSize * textScale);
  const margin = Math.max(0, state.labelMargin * textScale);
  const pointerOffset = state.labelPointerOffset * textScale;
  const labelOffset = state.labelOffset * textScale;
  const padX = Math.max(0, state.labelPaddingX * textScale);
  const padY = Math.max(0, state.labelPaddingY * textScale);
  const borderWidth = Math.max(0, state.labelBorderWidth * textScale);
  const borderRadius = Math.max(0, state.labelBorderRadius * textScale);
  const pointerSize = state.labelPointerShow ? Math.max(0, state.labelPointerSize * textScale) : 0;

  ctx.save();
  ctx.font = buildCanvasFont(fontSize, state.labelFont, state.labelBold, state.labelItalic);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const fillStyle = colorToRgbaString(state.labelBoxColor, state.labelBoxOpacity);
  const borderStyle = colorToRgbaString(state.labelBorderColor, 1);
  const textStyle = colorToRgbaString(state.labelColor, 1);

  for (const entry of entries) {
    const projected = worldToCanvasPosition(entry.point, cameraToUse, viewport);
    if (!projected.onScreen) {
      continue;
    }

    const labelText = applyTextTransform(entry.text);
    const textWidth = ctx.measureText(labelText).width;
    const boxWidth = textWidth + padX * 2;
    const boxHeight = fontSize + padY * 2;
    const stem = pointerSize > 0 ? pointerSize : 0;

    let tipX = projected.x;
    let tipY = projected.y;
    const tipShift = margin + pointerOffset;
    let boxX = projected.x - boxWidth / 2;
    let boxY = projected.y - stem - boxHeight;

    if (state.labelPlacement === "above") {
      tipY = projected.y - tipShift;
      boxY = tipY - stem - boxHeight - labelOffset;
    } else if (state.labelPlacement === "below") {
      tipY = projected.y + tipShift;
      boxY = tipY + stem + labelOffset;
    } else if (state.labelPlacement === "left") {
      tipX = projected.x - tipShift;
      boxX = tipX - stem - boxWidth - labelOffset;
      boxY = projected.y - boxHeight / 2;
    } else {
      tipX = projected.x + tipShift;
      boxX = tipX + stem + labelOffset;
      boxY = projected.y - boxHeight / 2;
    }

    drawPointerPath(ctx, state.labelPlacement, tipX, tipY, boxX, boxY, boxWidth, boxHeight, pointerSize);
    if (pointerSize > 0) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
      if (borderWidth > 0) {
        ctx.strokeStyle = borderStyle;
        ctx.lineWidth = borderWidth;
        ctx.stroke();
      }
    }

    roundedRectPath(ctx, boxX, boxY, boxWidth, boxHeight, borderRadius);
    ctx.fillStyle = fillStyle;
    ctx.fill();
    if (borderWidth > 0) {
      ctx.strokeStyle = borderStyle;
      ctx.lineWidth = borderWidth;
      ctx.stroke();
    }

    ctx.fillStyle = textStyle;
    drawStyledCanvasText(ctx, labelText, boxX + boxWidth / 2, boxY + boxHeight / 2, {
      underline: state.labelUnderline,
      fontSize,
      textAlign: "center",
      textBaseline: "middle"
    });
  }

  ctx.restore();
}

function renderSinglePointLabelsOverlay() {
  const width = Math.max(1, canvas.clientWidth);
  const height = Math.max(1, canvas.clientHeight);
  ensureOverlayCanvasSize(width, height);
  gridBorderCtx.clearRect(0, 0, width, height);

  drawPointLabels(
    gridBorderCtx,
    camera,
    { x: 0, y: 0, width, height },
    state.animatedStage,
    1
  );
}

function drawGridPointLabels(ctx, layout, textScale = 1) {
  for (let i = 0; i < layout.cells.length; i += 1) {
    const cell = layout.cells[i];
    const stageValue = i + 1;
    const cellAspect = Math.max(1, cell.width) / Math.max(1, cell.height);
    const viewOverride = getGridCellViewOverride(i);
    const tempCamera = createRenderCameraForAspect(cellAspect, viewOverride);
    drawPointLabels(
      ctx,
      tempCamera,
      { x: cell.x, y: cell.y, width: Math.max(1, cell.width), height: Math.max(1, cell.height) },
      stageValue,
      textScale
    );
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

  if (hasPerCellGridCameraState()) {
    ensureGridCellViews();
  }

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
    const viewOverride = getGridCellViewOverride(i);
    const tempCamera = createRenderCameraForAspect(cellAspect, viewOverride);

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

  drawGridPointLabels(gridBorderCtx, layout, 1);
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

  if (state.displayMode === "grid" && hasPerCellGridCameraState()) {
    ensureGridCellViews();
    saveMainCameraToGridCell(activeGridCameraCell);
  }

  if (state.displayMode === "grid") {
    renderGridView();
  } else {
    renderer.render(scene, camera);
    renderSinglePointLabelsOverlay();
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

    const offscreen = document.createElement("canvas");
    offscreen.width = targetWidth;
    offscreen.height = targetHeight;
    const ctx = offscreen.getContext("2d");
    ctx.drawImage(renderer.domElement, 0, 0);
    drawPointLabels(
      ctx,
      tempCamera,
      { x: 0, y: 0, width: targetWidth, height: targetHeight },
      state.animatedStage,
      scale
    );

    const dataUrl = offscreen.toDataURL("image/png");
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

    if (hasPerCellGridCameraState()) {
      ensureGridCellViews();
    }

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
      const viewOverride = getGridCellViewOverride(i);
      const tempCamera = createRenderCameraForAspect(cellAspect, viewOverride);

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

    drawGridPointLabels(ctx, layout, scale);

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

  settingsBtn.addEventListener("click", () => {
    setConfigPanelOpen(true);
  });

  closeConfigBtn.addEventListener("click", () => {
    setConfigPanelOpen(false);
  });

  configPanel.addEventListener("change", () => {
    syncConfigPanelVisibility();
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

  const syncLabelTextModeFields = () => {
    vectorEndLabelTextInput.disabled = state.vectorEndTextMode !== "custom";
  };

  showDotLabelsInput.addEventListener("change", () => {
    state.showDotLabels = showDotLabelsInput.checked;
  });

  showOriginLabelInput.addEventListener("change", () => {
    state.showOriginLabel = showOriginLabelInput.checked;
  });

  originLabelTextInput.addEventListener("input", () => {
    state.originLabelText = originLabelTextInput.value;
  });

  showVectorEndLabelInput.addEventListener("change", () => {
    state.showVectorEndLabel = showVectorEndLabelInput.checked;
  });

  vectorEndLabelTextModeInput.addEventListener("change", () => {
    state.vectorEndTextMode = vectorEndLabelTextModeInput.value;
    syncLabelTextModeFields();
  });

  vectorEndLabelTextInput.addEventListener("input", () => {
    state.vectorEndText = vectorEndLabelTextInput.value;
  });

  showInitialVectorEndLabelInput.addEventListener("change", () => {
    state.showInitialVectorEndLabel = showInitialVectorEndLabelInput.checked;
  });

  initialVectorEndLabelTextInput.addEventListener("input", () => {
    state.initialVectorEndText = initialVectorEndLabelTextInput.value;
  });

  labelFontInput.addEventListener("change", () => {
    state.labelFont = labelFontInput.value;
  });

  labelSizeInput.addEventListener("input", () => {
    state.labelSize = Number(labelSizeInput.value);
    labelSizeValue.textContent = String(Math.round(state.labelSize));
  });

  labelColorInput.addEventListener("input", () => {
    state.labelColor = new THREE.Color(labelColorInput.value);
  });

  labelTextTransformInput.addEventListener("change", () => {
    state.labelTextTransform = labelTextTransformInput.value;
  });

  labelBoldInput.addEventListener("change", () => {
    state.labelBold = labelBoldInput.checked;
  });

  labelItalicInput.addEventListener("change", () => {
    state.labelItalic = labelItalicInput.checked;
  });

  labelUnderlineInput.addEventListener("change", () => {
    state.labelUnderline = labelUnderlineInput.checked;
  });

  labelPlacementInput.addEventListener("change", () => {
    state.labelPlacement = labelPlacementInput.value;
  });

  labelMarginInput.addEventListener("input", () => {
    state.labelMargin = Number(labelMarginInput.value);
    labelMarginValue.textContent = String(Math.round(state.labelMargin));
  });

  labelPointerOffsetInput.addEventListener("input", () => {
    state.labelPointerOffset = Number(labelPointerOffsetInput.value);
    labelPointerOffsetValue.textContent = String(Math.round(state.labelPointerOffset));
  });

  labelOffsetInput.addEventListener("input", () => {
    state.labelOffset = Number(labelOffsetInput.value);
    labelOffsetValue.textContent = String(Math.round(state.labelOffset));
  });

  labelPaddingXInput.addEventListener("input", () => {
    state.labelPaddingX = Number(labelPaddingXInput.value);
    labelPaddingXValue.textContent = String(Math.round(state.labelPaddingX));
  });

  labelPaddingYInput.addEventListener("input", () => {
    state.labelPaddingY = Number(labelPaddingYInput.value);
    labelPaddingYValue.textContent = String(Math.round(state.labelPaddingY));
  });

  labelBoxColorInput.addEventListener("input", () => {
    state.labelBoxColor = new THREE.Color(labelBoxColorInput.value);
  });

  labelBoxOpacityInput.addEventListener("input", () => {
    state.labelBoxOpacity = Number(labelBoxOpacityInput.value);
    labelBoxOpacityValue.textContent = state.labelBoxOpacity.toFixed(2);
  });

  labelBorderColorInput.addEventListener("input", () => {
    state.labelBorderColor = new THREE.Color(labelBorderColorInput.value);
  });

  labelBorderWidthInput.addEventListener("input", () => {
    state.labelBorderWidth = Number(labelBorderWidthInput.value);
    labelBorderWidthValue.textContent = state.labelBorderWidth.toFixed(1);
  });

  labelBorderRadiusInput.addEventListener("input", () => {
    state.labelBorderRadius = Number(labelBorderRadiusInput.value);
    labelBorderRadiusValue.textContent = String(Math.round(state.labelBorderRadius));
  });

  labelPointerShowInput.addEventListener("change", () => {
    state.labelPointerShow = labelPointerShowInput.checked;
  });

  labelPointerSizeInput.addEventListener("input", () => {
    state.labelPointerSize = Number(labelPointerSizeInput.value);
    labelPointerSizeValue.textContent = String(Math.round(state.labelPointerSize));
  });

  syncLabelTextModeFields();

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
    if (state.displayMode === "grid" && hasPerCellGridCameraState()) {
      ensureGridCellViews();
      applyGridCellViewToMainCamera(activeGridCameraCell);
    }
    if (state.displayMode !== "grid") {
      gridBorderCtx.clearRect(0, 0, gridBorderOverlay.width, gridBorderOverlay.height);
    }
    updateGridCameraModeUi();
    syncConfigPanelVisibility();
  });

  gridAspectRatioInput.addEventListener("change", () => {
    state.gridAspectRatio = gridAspectRatioInput.value;
    updateSceneWrapHeightForGridMode();
  });

  gridSyncCellCamerasInput.addEventListener("change", () => {
    state.gridSyncCellCameras = gridSyncCellCamerasInput.checked;
    ensureGridCellViews();
    if (state.gridSyncCellCameras) {
      const sharedOffset = getCameraOrbitOffset();
      for (let i = 0; i < gridCellViews.length; i += 1) {
        gridCellViews[i].position.copy(gridCellViews[i].target.clone().add(sharedOffset));
      }
    } else if (state.displayMode === "grid") {
      applyGridCellViewToMainCamera(activeGridCameraCell);
    }
    updateGridCameraModeUi();
  });

  gridSyncCellPositionInput.addEventListener("change", () => {
    state.gridSyncCellPosition = gridSyncCellPositionInput.checked;
    ensureGridCellViews();
    if (state.gridSyncCellPosition) {
      const sharedTarget = controls.target.clone();
      for (let i = 0; i < gridCellViews.length; i += 1) {
        const orbitOffset = getGridViewOrbitOffset(gridCellViews[i]);
        gridCellViews[i].target.copy(sharedTarget);
        gridCellViews[i].position.copy(sharedTarget.clone().add(orbitOffset));
      }
    } else if (state.displayMode === "grid") {
      applyGridCellViewToMainCamera(activeGridCameraCell);
    }
    updateGridCameraModeUi();
  });

  gridSyncCellZoomInput.addEventListener("change", () => {
    state.gridSyncCellZoom = gridSyncCellZoomInput.checked;
    ensureGridCellViews();
    if (state.gridSyncCellZoom) {
      for (let i = 0; i < gridCellViews.length; i += 1) {
        gridCellViews[i].zoom = camera.zoom;
      }
    } else if (state.displayMode === "grid") {
      applyGridCellViewToMainCamera(activeGridCameraCell);
    }
    updateGridCameraModeUi();
  });

  resetGridCellCameraBtn.addEventListener("click", () => {
    if (!hasPerCellGridCameraState()) {
      return;
    }
    resetActiveGridCellCamera();
  });

  canvas.addEventListener("pointerdown", (event) => {
    selectGridCameraCellFromPointerEvent(event);
  });

  updateGridCameraModeUi();

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

  gridNumberTextTransformInput.addEventListener("change", () => {
    state.gridNumberTextTransform = gridNumberTextTransformInput.value;
  });

  gridNumberBoldInput.addEventListener("change", () => {
    state.gridNumberBold = gridNumberBoldInput.checked;
  });

  gridNumberItalicInput.addEventListener("change", () => {
    state.gridNumberItalic = gridNumberItalicInput.checked;
  });

  gridNumberUnderlineInput.addEventListener("change", () => {
    state.gridNumberUnderline = gridNumberUnderlineInput.checked;
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

  gridLabelTextTransformInput.addEventListener("change", () => {
    state.gridLabelTextTransform = gridLabelTextTransformInput.value;
  });

  gridLabelBoldInput.addEventListener("change", () => {
    state.gridLabelBold = gridLabelBoldInput.checked;
  });

  gridLabelItalicInput.addEventListener("change", () => {
    state.gridLabelItalic = gridLabelItalicInput.checked;
  });

  gridLabelUnderlineInput.addEventListener("change", () => {
    state.gridLabelUnderline = gridLabelUnderlineInput.checked;
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

  syncConfigPanelVisibility();
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
  gridSyncCellCamerasInput.checked = state.gridSyncCellCameras;
  gridSyncCellPositionInput.checked = state.gridSyncCellPosition;
  gridSyncCellZoomInput.checked = state.gridSyncCellZoom;
  updateGridCameraModeUi();
  gridNumberShowInput.checked = state.gridNumberShow;
  gridNumberFontInput.value = state.gridNumberFont;
  gridNumberColorInput.value = `#${state.gridNumberColor.getHexString()}`;
  gridNumberSizeInput.value = String(state.gridNumberSize);
  gridNumberSizeValue.textContent = String(Math.round(state.gridNumberSize));
  gridNumberMarginInput.value = String(state.gridNumberMargin);
  gridNumberMarginValue.textContent = String(Math.round(state.gridNumberMargin));
  gridNumberPlacementInput.value = state.gridNumberPlacement;
  gridNumberTextTransformInput.value = state.gridNumberTextTransform;
  gridNumberBoldInput.checked = state.gridNumberBold;
  gridNumberItalicInput.checked = state.gridNumberItalic;
  gridNumberUnderlineInput.checked = state.gridNumberUnderline;
  gridLabelShowInput.checked = state.gridLabelShow;
  gridLabelFontInput.value = state.gridLabelFont;
  gridLabelColorInput.value = `#${state.gridLabelColor.getHexString()}`;
  gridLabelSizeInput.value = String(state.gridLabelSize);
  gridLabelSizeValue.textContent = String(Math.round(state.gridLabelSize));
  gridLabelMarginInput.value = String(state.gridLabelMargin);
  gridLabelMarginValue.textContent = String(Math.round(state.gridLabelMargin));
  gridLabelPlacementInput.value = state.gridLabelPlacement;
  gridLabelTextTransformInput.value = state.gridLabelTextTransform;
  gridLabelBoldInput.checked = state.gridLabelBold;
  gridLabelItalicInput.checked = state.gridLabelItalic;
  gridLabelUnderlineInput.checked = state.gridLabelUnderline;
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

  showDotLabelsInput.checked = state.showDotLabels;
  showOriginLabelInput.checked = state.showOriginLabel;
  originLabelTextInput.value = state.originLabelText;
  showVectorEndLabelInput.checked = state.showVectorEndLabel;
  vectorEndLabelTextModeInput.value = state.vectorEndTextMode;
  vectorEndLabelTextInput.value = state.vectorEndText;
  vectorEndLabelTextInput.disabled = state.vectorEndTextMode !== "custom";
  showInitialVectorEndLabelInput.checked = state.showInitialVectorEndLabel;
  initialVectorEndLabelTextInput.value = state.initialVectorEndText;
  labelFontInput.value = state.labelFont;
  labelSizeInput.value = String(state.labelSize);
  labelColorInput.value = `#${state.labelColor.getHexString()}`;
  labelTextTransformInput.value = state.labelTextTransform;
  labelBoldInput.checked = state.labelBold;
  labelItalicInput.checked = state.labelItalic;
  labelUnderlineInput.checked = state.labelUnderline;
  labelPlacementInput.value = state.labelPlacement;
  labelMarginInput.value = String(state.labelMargin);
  labelPointerOffsetInput.value = String(state.labelPointerOffset);
  labelOffsetInput.value = String(state.labelOffset);
  labelPaddingXInput.value = String(state.labelPaddingX);
  labelPaddingYInput.value = String(state.labelPaddingY);
  labelBoxColorInput.value = `#${state.labelBoxColor.getHexString()}`;
  labelBoxOpacityInput.value = String(state.labelBoxOpacity);
  labelBorderColorInput.value = `#${state.labelBorderColor.getHexString()}`;
  labelBorderWidthInput.value = String(state.labelBorderWidth);
  labelBorderRadiusInput.value = String(state.labelBorderRadius);
  labelPointerShowInput.checked = state.labelPointerShow;
  labelPointerSizeInput.value = String(state.labelPointerSize);

  showAxesToggle.checked = state.showAxes;
  axisColorInput.value = `#${state.axisColor.getHexString()}`;
  axisLengthInput.value = String(state.axisLength);
  axisThicknessInput.value = String(state.axisThickness);

  dirAzimuthInput.value = String(state.dirAzimuth);
  dirElevationInput.value = String(state.dirElevation);

  showFogToggle.checked = state.showFog;
  fogDensityInput.value = String(state.fogDensity);
  syncConfigPanelVisibility();
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
  labelSizeValue.textContent = String(Math.round(state.labelSize));
  labelMarginValue.textContent = String(Math.round(state.labelMargin));
  labelPointerOffsetValue.textContent = String(Math.round(state.labelPointerOffset));
  labelOffsetValue.textContent = String(Math.round(state.labelOffset));
  labelPaddingXValue.textContent = String(Math.round(state.labelPaddingX));
  labelPaddingYValue.textContent = String(Math.round(state.labelPaddingY));
  labelBoxOpacityValue.textContent = state.labelBoxOpacity.toFixed(2);
  labelBorderWidthValue.textContent = state.labelBorderWidth.toFixed(1);
  labelBorderRadiusValue.textContent = String(Math.round(state.labelBorderRadius));
  labelPointerSizeValue.textContent = String(Math.round(state.labelPointerSize));
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
  gridSyncCellCamerasInput.checked = state.gridSyncCellCameras;
  gridSyncCellPositionInput.checked = state.gridSyncCellPosition;
  gridSyncCellZoomInput.checked = state.gridSyncCellZoom;
  gridNumberShowInput.checked = state.gridNumberShow;
  gridNumberFontInput.value = state.gridNumberFont;
  gridNumberColorInput.value = `#${state.gridNumberColor.getHexString()}`;
  gridNumberSizeInput.value = String(state.gridNumberSize);
  gridNumberSizeValue.textContent = String(Math.round(state.gridNumberSize));
  gridNumberMarginInput.value = String(state.gridNumberMargin);
  gridNumberMarginValue.textContent = String(Math.round(state.gridNumberMargin));
  gridNumberPlacementInput.value = state.gridNumberPlacement;
  gridNumberTextTransformInput.value = state.gridNumberTextTransform;
  gridNumberBoldInput.checked = state.gridNumberBold;
  gridNumberItalicInput.checked = state.gridNumberItalic;
  gridNumberUnderlineInput.checked = state.gridNumberUnderline;
  gridLabelShowInput.checked = state.gridLabelShow;
  gridLabelFontInput.value = state.gridLabelFont;
  gridLabelColorInput.value = `#${state.gridLabelColor.getHexString()}`;
  gridLabelSizeInput.value = String(state.gridLabelSize);
  gridLabelSizeValue.textContent = String(Math.round(state.gridLabelSize));
  gridLabelMarginInput.value = String(state.gridLabelMargin);
  gridLabelMarginValue.textContent = String(Math.round(state.gridLabelMargin));
  gridLabelPlacementInput.value = state.gridLabelPlacement;
  gridLabelTextTransformInput.value = state.gridLabelTextTransform;
  gridLabelBoldInput.checked = state.gridLabelBold;
  gridLabelItalicInput.checked = state.gridLabelItalic;
  gridLabelUnderlineInput.checked = state.gridLabelUnderline;
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

  showDotLabelsInput.checked = state.showDotLabels;
  showOriginLabelInput.checked = state.showOriginLabel;
  originLabelTextInput.value = state.originLabelText;
  showVectorEndLabelInput.checked = state.showVectorEndLabel;
  vectorEndLabelTextModeInput.value = state.vectorEndTextMode;
  vectorEndLabelTextInput.value = state.vectorEndText;
  vectorEndLabelTextInput.disabled = state.vectorEndTextMode !== "custom";
  showInitialVectorEndLabelInput.checked = state.showInitialVectorEndLabel;
  initialVectorEndLabelTextInput.value = state.initialVectorEndText;
  labelFontInput.value = state.labelFont;
  labelSizeInput.value = String(state.labelSize);
  labelColorInput.value = `#${state.labelColor.getHexString()}`;
  labelTextTransformInput.value = state.labelTextTransform;
  labelBoldInput.checked = state.labelBold;
  labelItalicInput.checked = state.labelItalic;
  labelUnderlineInput.checked = state.labelUnderline;
  labelPlacementInput.value = state.labelPlacement;
  labelMarginInput.value = String(state.labelMargin);
  labelPointerOffsetInput.value = String(state.labelPointerOffset);
  labelOffsetInput.value = String(state.labelOffset);
  labelPaddingXInput.value = String(state.labelPaddingX);
  labelPaddingYInput.value = String(state.labelPaddingY);
  labelBoxColorInput.value = `#${state.labelBoxColor.getHexString()}`;
  labelBoxOpacityInput.value = String(state.labelBoxOpacity);
  labelBorderColorInput.value = `#${state.labelBorderColor.getHexString()}`;
  labelBorderWidthInput.value = String(state.labelBorderWidth);
  labelBorderRadiusInput.value = String(state.labelBorderRadius);
  labelPointerShowInput.checked = state.labelPointerShow;
  labelPointerSizeInput.value = String(state.labelPointerSize);
  syncConfigPanelVisibility();
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
gridCellViews = parseGridCustomViews(cfg.display?.gridCustomCameras);
ensureGridCellViews();
if (state.displayMode === "grid" && hasPerCellGridCameraState()) {
  applyGridCellViewToMainCamera(activeGridCameraCell);
}
rebuildStageGeometry();
rebuildAxisMeshes();
updateAxesVisibility();
bindControls();
setInitialOutputValues();
scene.fog = state.showFog ? new THREE.FogExp2(0xd4e3f6, state.fogDensity) : null;
onResize();
animate();
