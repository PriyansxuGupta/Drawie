'use client';

import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS, MENU_ITEMS } from '@/constants';
import { changeBrushSize, changeColor } from '@/slices/toolBoxSlice';
import { socket } from '@/socket';
import { Minimize2, Maximize2 } from 'lucide-react';

export default function Toolbox() {
  const dispatch = useDispatch();
  const [isMinimized, setIsMinimized] = useState(false);
  const colorContainerRef = useRef(null);

  const activeMenuItem = useSelector((store) => store.menu.activeMenuItem);
  const toolConfig = useSelector((store) => store.tool[activeMenuItem] || {});
  const { color = '', size = 1 } = toolConfig;

  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER;

  const handleBrushSize = (e) => {
    const newSize = Number(e.target.value);
    dispatch(changeBrushSize({ item: activeMenuItem, size: newSize }));
    socket.emit('changeConfig', { color, size: newSize });
  };

  const handleColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
    socket.emit('changeConfig', { color: newColor, size });
  };

  return (
    <aside
      className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[420px] bg-background1/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-5 py-4 transition-all duration-300"
      aria-label="Toolbox"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-bold text-text1 tracking-wide">Toolbox</h4>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={isMinimized ? "Expand toolbox" : "Minimize toolbox"}
        >
          {isMinimized ? (
            <Maximize2 className="text-text1" size={16} />
          ) : (
            <Minimize2 className="text-text1" size={16} />
          )}
        </button>
      </div>

      {!isMinimized && (
        <div className="space-y-4">
          {showStrokeToolOption && (
            <section aria-label="Stroke color">
              <h6 className="text-xs font-semibold text-text1/70 mb-2 uppercase tracking-wider">Stroke Color</h6>
              <div
                ref={colorContainerRef}
                className="flex gap-2 overflow-x-auto py-1 px-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
              >
                {Object.values(COLORS).map((clr) => (
                  <button
                    key={clr}
                    className={`flex-shrink-0 h-7 w-7 rounded-full cursor-pointer transition-all duration-200 shadow-sm ${
                      color === clr
                        ? 'ring-2 ring-offset-2 ring-offset-background1 ring-blue-400 scale-110 shadow-lg'
                        : 'hover:scale-110 hover:shadow-md'
                    }`}
                    style={{ backgroundColor: clr }}
                    onClick={() => handleColor(clr)}
                    aria-label={`Select color ${clr}`}
                    title={clr}
                  />
                ))}
              </div>
            </section>
          )}

          {showBrushToolOption && (
            <section aria-label="Brush size">
              <div className="flex items-center justify-between mb-2">
                <h6 className="text-xs font-semibold text-text1/70 uppercase tracking-wider">Brush Size</h6>
                <span className="text-xs font-mono text-text1 bg-white/5 px-2 py-0.5 rounded-md">{size}px</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min={1}
                  max={100}
                  step={1}
                  value={size}
                  onChange={handleBrushSize}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-400 hover:accent-blue-300 transition-colors"
                  aria-label="Brush size slider"
                />
              </div>
            </section>
          )}
        </div>
      )}
    </aside>
  );
}
