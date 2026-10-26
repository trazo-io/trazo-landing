import { Mail } from "lucide-react";

/**
 * How a grower's records reach Trazo. Shown on /cog-pro-migration and on
 * /contact?topic=cog-pro-migration, so both say the same thing.
 *
 * Run 8b, 8b-07: the migration page sent people to the contact form, which has no file field,
 * and nothing said where the CSVs go or that a dry run comes first. There is no upload feature;
 * the import is done by hand (`import_cogpro` for a COG Pro export, `import_records` for a
 * spreadsheet or binder photos; both are a dry run unless --commit, and `import_records` files
 * the preview the grower approves). Keep this block plain and keep the address oscar@trazo.io
 * (assisted setup). info@trazo.io stays the general contact.
 */
export const COG_PRO_MIGRATION_EMAIL = "oscar@trazo.io";

export function CogProMigrationSteps({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      id="send-your-files"
      className={`rounded-xl border border-primary/20 bg-primary/5 p-6 ${className}`}
    >
      <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
        <Mail className="text-primary" size={20} aria-hidden="true" />
        How to send your records
      </h3>
      <ol className="mt-3 list-decimal space-y-2 pl-6 leading-[1.8] text-muted-foreground">
        <li>
          Export your records from COG Pro as CSV files, or attach your
          spreadsheet, or photograph the pages of your binder and the product
          labels in your shed.
        </li>
        <li>
          Email the files as attachments to{" "}
          <a
            href={`mailto:${COG_PRO_MIGRATION_EMAIL}?subject=Setting%20up%20my%20records`}
            className="font-semibold text-primary hover:underline"
          >
            {COG_PRO_MIGRATION_EMAIL}
          </a>
          . Include the farm name in the email.
        </li>
        <li>
          Oscar runs a dry import first and sends you back what would come in
          and what would be skipped. Nothing is written to an account before
          that. You reply with corrections, or with ok.
        </li>
      </ol>
      <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
        There is no upload button on this site, and the contact form cannot take
        attachments, so the files have to come by email.
      </p>
    </div>
  );
}
