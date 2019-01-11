ThisPath=$(cd `dirname $0`;pwd)
list=$(ls -l $ThisPath | awk '{if(substr($1,1,1)=="d"){ print $9}}')
echo "$list" | while read line;
do
 path=$line
 file_path=$ThisPath"/"$path
 echo "生成目录link: "$file_path
 link_name=$file_path"/link.txt"
 ls -l $file_path | grep ".md" | awk '{print $9}' | grep -v "^$"  | awk '{gsub(".md",".html",$0);print }' > $link_name
done
