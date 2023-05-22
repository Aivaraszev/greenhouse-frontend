import ModalSmallScreen from "src/components/UI/ModalSmallScreen";
import PresetItem from "./PresetItem";
import { useEffect } from "react";

interface ViewAllPresetsModalProps {
  open: boolean;
  onClose: () => void;
  presets: any;
  onPresetClick: (id: number) => void;
  onCreateNewClick(): void;
  onDeletePreset: (id: number) => void;
}

export default function ViewAllPresetsModal({
  open,
  onClose,
  presets,
  onPresetClick,
  onCreateNewClick,
  onDeletePreset,
}: ViewAllPresetsModalProps) {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) onClose();
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  return (
    <>
      <ModalSmallScreen title={"Choose a preset"} open={open} onClose={onClose}>
        <div className="justify-end flex flex-col gaitems-center">
          <button
            className="bg-dark w-full order-last text-white font-semibold
        p-3 rounded-lg mt-3 mb-4 text-lg hover:bg-slate-700 ease-in-out duration-200"
            onClick={() => {
              onCreateNewClick();
              onClose();
            }}
          >
            Create new Preset
          </button>
          {presets.map((item: any) => (
            <PresetItem
              onPresetClick={(name) => {
                onPresetClick(name);
                onClose();
              }}
              onDeletePreset={onDeletePreset}
              key={item.id}
              presetId={item.id}
              presetName={item.name}
            ></PresetItem>
          ))}
        </div>
      </ModalSmallScreen>
    </>
  );
}
