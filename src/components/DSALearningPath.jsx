'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, Clock, BookOpen, Brain, Code, Target, Award, LayoutList, GitBranch } from 'lucide-react';
import mermaid from 'mermaid';

const DSALearningPath = () => {
  const [openSection, setOpenSection] = useState('foundations');
  const [view, setView] = useState('list');

  useEffect(() => {
    if (typeof window !== 'undefined' && view === 'flowchart') {
      mermaid.initialize({ 
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
          htmlLabels: true,
          curve: 'basis'
        }
      });
      mermaid.contentLoaded();
    }
  }, [view]);

  const sections = {
    foundations: {
      title: "1. Foundations (Week 1-2)",
      icon: <Brain className="w-6 h-6" />,
      topics: [
        "Basic Mathematics",
        "Algorithmic Thinking",
        "Complexity Analysis",
        "Big O Notation",
        "Space & Time Trade-offs"
      ]
    },
    dataStructures: {
      title: "2. Basic Data Structures (Week 3-4)",
      icon: <Code className="w-6 h-6" />,
      topics: [
        "Arrays & Strings",
        "Linked Lists",
        "Stacks",
        "Queues"
      ]
    },
    basicAlgo: {
      title: "3. Basic Algorithms (Week 5-6)",
      icon: <BookOpen className="w-6 h-6" />,
      topics: [
        "Searching (Linear & Binary)",
        "Basic Sorting (Bubble, Selection, Insertion)",
        "Two Pointers",
        "Sliding Window"
      ]
    },
    advancedDS: {
      title: "4. Advanced Data Structures (Week 7-9)",
      icon: <Code className="w-6 h-6" />,
      topics: [
        "Trees (Binary, BST, AVL & Red-Black)",
        "Heaps",
        "Hash Tables",
        "Graphs",
        "Tries"
      ]
    },
    advancedAlgo: {
      title: "5. Advanced Algorithms (Week 10-12)",
      icon: <Target className="w-6 h-6" />,
      topics: [
        "Advanced Sorting (Merge, Quick, Heap)",
        "Graph Algorithms (BFS, DFS, Dijkstra, MST)",
        "Dynamic Programming",
        "Greedy Algorithms"
      ]
    },
    specializedTopics: {
      title: "6. Specialized Topics (Week 13-14)",
      icon: <Brain className="w-6 h-6" />,
      topics: [
        "String Algorithms",
        "Bit Manipulation",
        "Backtracking",
        "Design Patterns"
      ]
    },
    practice: {
      title: "7. Practical Application (Week 15-16)",
      icon: <Award className="w-6 h-6" />,
      topics: [
        "Problem Patterns",
        "System Design Basics",
        "Mock Interviews"
      ]
    }
  };

  const flowchartDefinition = `
    flowchart TD
      %% Main nodes
      Start([Start DSA Journey])
      
      %% Phase 1: Foundations
      F[1. FOUNDATIONS]
      F1[1.1 Basic Mathematics]
      F2[1.2 Algorithmic Thinking]
      F3[1.3 Complexity Analysis]
      F31[Big O Notation]
      F32[Space & Time Trade-offs]
      
      %% Phase 2: Basic Data Structures
      DS[2. BASIC DATA STRUCTURES]
      DS1[2.1 Arrays & Strings]
      DS2[2.2 Linked Lists]
      DS3[2.3 Stacks]
      DS4[2.4 Queues]
      
      %% Phase 3: Basic Algorithms
      BA[3. BASIC ALGORITHMS]
      BA1[3.1 Searching]
      BA11[Linear & Binary Search]
      BA2[3.2 Basic Sorting]
      BA21[Bubble, Selection, Insertion]
      BA3[3.3 Two Pointers]
      BA4[3.4 Sliding Window]
      
      %% Phase 4: Advanced Data Structures
      ADS[4. ADVANCED DATA STRUCTURES]
      ADS1[4.1 Trees]
      ADS11[Binary Trees]
      ADS12[BST]
      ADS2[4.2 Heaps]
      ADS3[4.3 Hash Tables]
      ADS4[4.4 Graphs]
      
      %% Phase 5: Advanced Algorithms
      AA[5. ADVANCED ALGORITHMS]
      AA1[5.1 Advanced Sorting]
      AA11[Merge Sort]
      AA12[Quick Sort]
      AA2[5.2 Graph Algorithms]
      AA21[BFS & DFS]
      AA3[5.3 Dynamic Programming]
      AA4[5.4 Greedy Algorithms]
      
      %% Connections
      Start --> F
      F --> F1 & F2 & F3
      F3 --> F31 & F32
      F --> DS
      DS --> DS1 & DS2
      DS --> DS3 & DS4
      DS --> BA
      BA --> BA1 --> BA11
      BA --> BA2 --> BA21
      BA --> BA3 & BA4
      BA --> ADS
      ADS --> ADS1 --> ADS11 & ADS12
      ADS --> ADS2 & ADS3 & ADS4
      ADS --> AA
      AA --> AA1 --> AA11 & AA12
      AA --> AA2 --> AA21
      AA --> AA3 & AA4
      AA --> End([DSA Master])
      
      %% Styling
      classDef default fill:#f9f9f9,stroke:#333,stroke-width:2px
      classDef milestone fill:#e8f5e9,stroke:#2e7d32
      class Start,End milestone
  `;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">DSA Learning Path</h1>
          <p className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            16-week comprehensive program
          </p>
        </div>
      </header>

      {/* View Toggle */}
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex gap-4">
              <button 
                onClick={() => setView('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded ${view === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                <LayoutList className="w-5 h-5" />
                List View
              </button>
              <button 
                onClick={() => setView('flowchart')}
                className={`flex items-center gap-2 px-4 py-2 rounded ${view === 'flowchart' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                <GitBranch className="w-5 h-5" />
                Flowchart View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-4">
        <div className="max-w-3xl mx-auto">
          {view === 'list' ? (
            <div className="space-y-4">
              {/* Introduction Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Welcome to Your DSA Journey!</h2>
                <p className="text-gray-600">
                  This comprehensive learning path will take you from the basics to advanced concepts
                  in Data Structures and Algorithms. Follow the structured timeline and master each
                  section before moving forward.
                </p>
              </div>

              {/* Section Cards */}
              {Object.entries(sections).map(([key, section]) => (
                <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenSection(openSection === key ? '' : key)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      {section.icon}
                      <h3 className="text-lg font-semibold">{section.title}</h3>
                    </div>
                    {openSection === key ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  
                  {openSection === key && (
                    <div className="px-6 pb-4">
                      <ul className="space-y-2 mt-2">
                        {section.topics.map((topic, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mermaid">
                {flowchartDefinition}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Master Data Structures and Algorithms systematically</p>
        </div>
      </footer>
    </div>
  );
};

export default DSALearningPath;