import React from "react";

const formatBiologicalText = (text) => {

  
  return text
    // Headings
    .replace(/(Given DNA Sequence:)/g, "<h3 class='text-lg font-semibold text-gray-700'>$1</h3>")
    .replace(/(Transcription Rules:)/g, "<h3 class='text-lg font-semibold text-gray-700'>$1</h3>")
    .replace(/(DNA Template Strand:)/g, "<h3 class='text-lg font-semibold text-gray-700'>$1</h3>")
    .replace(/(mRNA Sequence:)/g, "<h3 class='text-lg font-semibold text-gray-700'>$1</h3>")
    .replace(/(Final Answer:)/g, "<h3 class='text-lg font-semibold text-gray-700'>$1</h3>")

    // Highlight sequences
    .replace(/(5′ AAA T 3′)/g, "<p class='bg-blue-100 text-blue-700 font-mono p-2 rounded-md'>$1</p>")
    .replace(/(3′ TTT A 5′)/g, "<p class='bg-yellow-100 text-yellow-700 font-mono p-2 rounded-md'>$1</p>")
    .replace(/(5′ AAAU 3′)/g, "<p class='bg-green-100 text-green-700 font-mono p-2 rounded-md'>$1</p>")
    .replace(/(5' AAAU 3')/g, "<p class='bg-purple-100 text-purple-700 font-mono p-2 rounded-md'>$1</p>");
};

const BiologicalTextFormatter = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: formatBiologicalText(text) }} />;
};

export default BiologicalTextFormatter;
