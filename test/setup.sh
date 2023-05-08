cp -r ../src .
echo "" >> src/popup/export.js
echo "module.exports = displayNames" >> src/popup/export.js
echo "" >> src/popup/ics.js
echo "module.exports = buildICS" >> src/popup/ics.js
echo "" >> src/scripts/content.js
echo "module.exports = getClassSchedule" >> src/scripts/content.js
