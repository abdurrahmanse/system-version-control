# Git & GitHub চিটশিট

(সব কমান্ড `git help <cmd>` দিয়ে যাচাইযোগ্য। আপনার ভার্সনে না মিললে ডক জেতে।)

## দৈনন্দিন
```bash
git status -sb                      # সংক্ষিপ্ত অবস্থা + ব্রাঞ্চ
git add -p                          # hunk বেছে stage
git diff / git diff --staged
git commit -m "feat: ..."
git log --oneline --graph --all
git switch -c <ব্রাঞ্চ> / git switch <ব্রাঞ্চ>
git fetch / git pull / git push
```
## ফেরত
```bash
git restore <f>                      # অকমিটেড পরিবর্তন ফেলা ⚠️
git restore --staged <f>             # unstage
git commit --amend                   # শেষ কমিট ঠিক (push-এর আগে)
git reset --soft|--mixed|--hard HEAD~1
git revert <commit>                  # push-এর পরের নিরাপদ ফেরত
git reflog                           # হারানো কমিটের সন্ধান
```
## গোছানো
```bash
git stash push -m "msg" / git stash pop
git rebase main / git rebase -i HEAD~N
git cherry-pick <commit>
git push --force-with-lease          # কখনো --force নয়
```
## GitHub CLI
```bash
gh pr create / gh pr checks / gh pr view --web / gh pr merge
gh issue create / gh issue list
gh run list / gh run view --log-failed
gh release create vX.Y.Z --generate-notes
```
## গোয়েন্দা
```bash
git log -S"text" / git log --grep="x" / git blame -L a,b <f>
git bisect start|good|bad|run|reset
git worktree add|list|remove
```
## বিপদ-সংকেত 🚩
`reset --hard`, `clean -fd`, `push --force`, `branch -D`, `filter-repo`: আগে স্যান্ডবক্স/ব্যাকআপ ব্রাঞ্চ/dry-run।
