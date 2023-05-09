#!/bin/bash

cp -r ../src .
input="test.config"
while IFS= read -r line || [[ -n "$line" ]]
do
    path=${line%% *}
    func=${line#* }
    echo "" >> "$path"
    echo "exports.$func = $func" >> "$path"
done < "$input"