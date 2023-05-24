#!/bin/bash

cp -r ../src .
input="test.config"
while IFS= read -r line || [[ -n "$line" ]]
do
    if [[ -z "$line" ]]; then
        continue
    fi

    path=${line%% *}
    func=${line#* }
    echo "" >> "$path"
    echo "exports.$func = $func" >> "$path"
done < "$input"