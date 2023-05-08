#!/bin/bash

cp -r ../src .
input="test.config"
while IFS= read -r line || [[ -n "$line" ]]
do
    path=${line%% *}
    func=${line#* }
    echo "" >> "$path"
    echo "module.exports = $func" >> "$path"
done < "$input"

npm test
rm -rd src

