import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

export const AmazingButton = () => {
  const [count] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <TouchableOpacity className="bg-red-500 p-4 rounded-lg">
      <Text className="text-white">My amazing button</Text>
      <Text className="text-white">I Am Not Native Winded</Text>
    </TouchableOpacity>
  );
};
