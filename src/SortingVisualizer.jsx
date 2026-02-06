// Lógica core dos algoritmos de ordenação e controle de visualização
import React, { useState, useEffect, useRef } from 'react';
import './SortingVisualizer.css'; // O CSS está logo abaixo

const SortingVisualizer = () => {
  // Estados Principais
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(50); // ms de delay
  const [arraySize, setArraySize] = useState(50);
  
  // Referências para controle de interrupção e acesso atualizado dentro de loops async
  const stopRef = useRef(false);

  // Cores para visualização
  const PRIMARY_COLOR = '#40E0D0'; // Turquesa
  const COMPARE_COLOR = '#FF4646'; // Vermelho
  const SWAP_COLOR = '#8A2BE2';    // Roxo
  const SORTED_COLOR = '#32CD32';  // Verde Limão

  useEffect(() => {
    generateArray();
  }, [arraySize]);

  // --- Funções Auxiliares ---

  const generateArray = () => {
    if (isSorting) return;
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 10);
    }
    setArray(newArray);
    
    // Reseta as cores das barras visualmente
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = PRIMARY_COLOR;
    }
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // --- Algoritmos de Ordenação ---

  const runBubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const bars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (stopRef.current) break;

        // Visualizar Comparação
        bars[j].style.backgroundColor = COMPARE_COLOR;
        bars[j + 1].style.backgroundColor = COMPARE_COLOR;
        
        await sleep(100 - speed); // Controle de velocidade invertido

        if (arr[j] > arr[j + 1]) {
          // Visualizar Troca
          bars[j].style.backgroundColor = SWAP_COLOR;
          bars[j + 1].style.backgroundColor = SWAP_COLOR;
          
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          
          // Atualiza visualmente a altura
          setArray([...arr]); 
          await sleep(100 - speed);
        }

        // Volta a cor normal
        bars[j].style.backgroundColor = PRIMARY_COLOR;
        bars[j + 1].style.backgroundColor = PRIMARY_COLOR;
      }
      // Marca o último elemento como ordenado
      bars[arr.length - i - 1].style.backgroundColor = SORTED_COLOR;
    }
    // Garante que o primeiro tbm fique verde
    bars[0].style.backgroundColor = SORTED_COLOR;
    setIsSorting(false);
  };

  const runQuickSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    await quickSortHelper(arr, 0, arr.length - 1);
    setIsSorting(false);
  };

  const quickSortHelper = async (arr, start, end) => {
    if (start >= end) {
      if (start >= 0 && start < arr.length) {
         const bars = document.getElementsByClassName('array-bar');
         bars[start].style.backgroundColor = SORTED_COLOR;
      }
      return;
    }

    const index = await partition(arr, start, end);
    
    // Promise.all para permitir visualização sequencial ou paralela (aqui sequencial)
    await quickSortHelper(arr, start, index - 1);
    await quickSortHelper(arr, index + 1, end);
  };

  const partition = async (arr, start, end) => {
    const bars = document.getElementsByClassName('array-bar');
    let pivotIndex = start;
    let pivotValue = arr[end];
    
    // Destaca o pivô
    bars[end].style.backgroundColor = 'yellow';

    for (let i = start; i < end; i++) {
      bars[i].style.backgroundColor = COMPARE_COLOR;
      await sleep(100 - speed);

      if (arr[i] < pivotValue) {
        bars[i].style.backgroundColor = SWAP_COLOR;
        bars[pivotIndex].style.backgroundColor = SWAP_COLOR;
        
        let temp = arr[i];
        arr[i] = arr[pivotIndex];
        arr[pivotIndex] = temp;
        
        setArray([...arr]);
        await sleep(100 - speed);
        
        bars[pivotIndex].style.backgroundColor = PRIMARY_COLOR;
        pivotIndex++;
      }
      bars[i].style.backgroundColor = PRIMARY_COLOR;
    }

    // Troca final do pivô
    let temp = arr[pivotIndex];
    arr[pivotIndex] = arr[end];
    arr[end] = temp;
    setArray([...arr]);
    
    bars[end].style.backgroundColor = PRIMARY_COLOR;
    bars[pivotIndex].style.backgroundColor = SORTED_COLOR; // Pivô está no lugar final

    return pivotIndex;
  };

  return (
    <div className="visualizer-container">
      <div className="header">
        <h1>Visualizador de Algoritmos</h1>
        <div className="controls">
          <div className="control-group">
            <label>Tamanho: {arraySize}</label>
            <input 
              type="range" 
              min="10" max="100" 
              value={arraySize} 
              onChange={(e) => setArraySize(Number(e.target.value))}
              disabled={isSorting}
            />
          </div>
          <div className="control-group">
            <label>Velocidade</label>
            <input 
              type="range" 
              min="10" max="100" 
              value={speed} 
              onChange={(e) => setSpeed(Number(e.target.value))}
              disabled={isSorting}
            />
          </div>
          <button onClick={generateArray} disabled={isSorting}>Gerar Novo Array</button>
          <div className="divider"></div>
          <button className="algo-btn" onClick={runBubbleSort} disabled={isSorting}>Bubble Sort</button>
          <button className="algo-btn" onClick={runQuickSort} disabled={isSorting}>Quick Sort</button>
        </div>
      </div>

      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
              width: `${600 / arraySize}px` // Largura dinâmica baseada no tamanho
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;