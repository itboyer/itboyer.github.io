ThisPath=`pwd`
list=$(ls -l $ThisPath | awk '{if(substr($1,1,1)=="d"){ print $9}}')
echo "$list" | while read line;
do
 path=$line
 file_path=$ThisPath"/"$path
 echo $file_path">>"
 file_name=$(ls -l $file_path | grep ".md" | awk '{print $9}' | grep -v "^$"  | awk '{gsub(".md",".html",$0);print }')
 link_name=$file_path"/link.txt"
 echo $file_name > $link_name
done
